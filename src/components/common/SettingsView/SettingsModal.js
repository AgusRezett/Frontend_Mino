import React from 'react';

// Components
import { FormattedMessage } from 'react-intl';
import LanguageOption from './LanguageOption';
import ThemeOption from './ThemeOption';

// Functions
import { modalAction, themesImages } from '../../../functions/SettingsFunctions';

// Languages
import { nationalitiesFlagsLang } from '../../../functions/GlobalFunctions';

export default function SettingsModal({ modalType }) {
  let modalContent;

  switch (modalType) {
    case "language":
      modalContent = {
        title: <FormattedMessage id="config.modal.title.language" defaultMessage="Elegí un idioma y región" />,
        body: nationalitiesFlagsLang.map((item, index) => {
          return <LanguageOption key={index} flag={item.flag} language={item.language} region={item.region} code={item.code} />
        })
      }
      break;
    case "theme":
      modalContent = {
        title: <FormattedMessage id="config.modal.title.theme" defaultMessage="Elegí un tema" />,
        body: themesImages.map((item, index) => {
          return <ThemeOption key={index} image={item.image} name={item.name} theme={item.theme} colors={item.colors} />
        })
      }
      break;

    default:
      modalContent = {
        title: "",
        body: ""
      }
      break;
  }
  return (
    <>
      <div id="settings-modal-container" className='settings-modal-container col-lg-6'>
        <div className='settings-modal-content'>
          <div className="settings-modal-header">
            <div className='modal--title'>{modalContent.title}</div>
            <div className='modal--close' onClick={() => modalAction(2)}>
              <svg viewBox="0 0 512 512">
                <title>Close</title>
                <path d="M286.17,256,420.42,121.75a21.33,21.33,0,1,0-30.17-30.17L256,225.83,121.75,91.58a21.33,21.33,0,1,0-30.17,30.17L225.83,256,91.58,390.25a21.33,21.33,0,1,0,30.17,30.17L256,286.17,390.25,420.42a21.33,21.33,0,1,0,30.17-30.17Z" />
              </svg>
            </div>
          </div>
          <div className="settings-modal-body">
            {modalContent.body}
          </div>
        </div>
      </div>
      <div id="dark-modal-overlay" className="dark-modal-overlay" onClick={() => modalAction(2)}></div>
    </>
  )
}
