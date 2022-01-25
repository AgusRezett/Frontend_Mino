import React from 'react';

// Components
import { FormattedMessage } from 'react-intl';
import LanguageOption from './LanguageOption';

// Functions
import { languageAction } from '../../../functions/SettingsFunctions';

// Languages
import { nationalitiesFlagsLang } from '../../../functions/GlobalFunctions';

export default function SettingsModal() {
  return (
    <>
      <div id="settings-modal-container" className='settings-modal-container col-lg-6'>
        <div className='settings-modal-content'>
          <div className="settings-modal-header">
            <div className='modal--title'><FormattedMessage id="config.modal.title" defaultMessage="Elegí un idioma y región" /></div>
            <div className='modal--close' onClick={() => languageAction(2)}>
              <svg viewBox="0 0 512 512">
                <title>Cross</title>
                <path d="M286.17,256,420.42,121.75a21.33,21.33,0,1,0-30.17-30.17L256,225.83,121.75,91.58a21.33,21.33,0,1,0-30.17,30.17L225.83,256,91.58,390.25a21.33,21.33,0,1,0,30.17,30.17L256,286.17,390.25,420.42a21.33,21.33,0,1,0,30.17-30.17Z" />
              </svg>
            </div>
          </div>
          <div className="settings-modal-body">
            {nationalitiesFlagsLang.map((item, index) => {
              return <LanguageOption key={index} flag={item.flag} language={item.language} region={item.region} code={item.code} />
            })}
          </div>
        </div>
      </div>
      <div id="dark-modal-overlay" className="dark-modal-overlay" onClick={() => languageAction(2)}></div>
    </>
  )
}
