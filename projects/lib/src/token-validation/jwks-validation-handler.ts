import { NullValidationHandler } from './null-validation-handler';

const err = `PLEASE READ THIS CAREFULLY:

Beginning with angular-oauth2-oidc version 9, the JwksValidationHandler
has been moved to an library of its own. If you need it for implementing
OAuth2/OIDC **implicit flow**, please install it using npm:

  npm i oa2-jwks-a9 --save

After that, you can import it into your application:

  import { JwksValidationHandler } from 'oa2-jwks-a9';

Please note, that this dependency is not needed for the **code flow**,
which is nowadays the **recommented** one for single page applications.
This also results in smaller bundle sizes.
`;

/**
 * This is just a dummy of the JwksValidationHandler
 * telling the users that the real one has been moved
 * to an library of its own, namely angular-oauth2-oidc-utils
 */
export class JwksValidationHandler extends NullValidationHandler {
  constructor() {
    super();
    console.error(err);
  }
}
