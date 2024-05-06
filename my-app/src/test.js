
import React from 'react';
import i18n from './i18n'; // Import your i18n instance
import LanguageSwitcher from './LanguageSwitcher';
function Testing(){
    return (
        <div>
<h1>i am testing file from</h1>
<h1>{i18n.t("home")}</h1>

        </div>
    )
}
export default Testing;