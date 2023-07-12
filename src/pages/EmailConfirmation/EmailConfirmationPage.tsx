import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { type ActivateEmailPayload, activateEmail } from '~/api/activateEmail';
import { Button } from '~/shared/ui/Button/Button';

export const EmailConfirmationPage = () => {
  const tokens = useParams<'uid' | 'token'>();
  const navigate = useNavigate();
  const [activationState, setActivationState] = useState<
    'loading' | 'success' | 'error'
  >('loading');

  useEffect(() => {
    activateEmail(tokens as ActivateEmailPayload)
      .then(() => setActivationState('success'))
      .catch((error) => {
        console.error(error);
        setActivationState('error');
      });
  }, [tokens]);

  if (activationState === 'error') {
    return (
      <div>
        <h2>Error</h2>
        <p>Oops, something went wrong</p>
        <Button
          onClick={() => navigate('/')}
          text="Home"
        ></Button>
      </div>
    );
  }

  if (activationState === 'loading') {
    return (
      <div>
        <h2>Verifying</h2>
      </div>
    );
  }
  return (
    <div>
      <h2>Success</h2>
      <p>Email confirmed. Your registration is now completed</p>
      <Button
        onClick={() => navigate('/sign-in')}
        text="Sign in"
      ></Button>
    </div>
  );
};
