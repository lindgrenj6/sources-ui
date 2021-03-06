import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { Text } from '@patternfly/react-core/dist/js/components/Text/Text';

import ErroredStep from '@redhat-cloud-services/frontend-components-sources/cjs/ErroredStep';

import WrapperModal from './WrapperModal';

const ErroredModal = ({ onRetry }) => {
  const intl = useIntl();

  return (
    <WrapperModal>
      <ErroredStep
        onClose={onRetry}
        customText={intl.formatMessage({
          id: 'sources.editErrorDescription',
          defaultMessage:
            'There was a problem while trying to edit your source. Please try again. If the error persists, open a support case.',
        })}
        secondaryActions={
          <Text
            component="a"
            target="_blank"
            href="https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true"
            rel="noopener noreferrer"
          >
            {intl.formatMessage({
              id: 'sources.openTicket',
              defaultMessage: 'Open a support case',
            })}
          </Text>
        }
        returnButtonTitle={intl.formatMessage({
          id: 'sources.retryText',
          defaultMessage: 'Retry',
        })}
      />
    </WrapperModal>
  );
};

ErroredModal.propTypes = {
  onRetry: PropTypes.func.isRequired,
};

export default ErroredModal;
