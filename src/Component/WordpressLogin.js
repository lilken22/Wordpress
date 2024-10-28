import React from 'react';
import './Wordpress.css';
import { Link } from 'react-router-dom';
import { FaWordpress } from "react-icons/fa6";
import  {IoEyeOutline}  from "react-icons/io5";

const WordpressLogin = () => {
  return (
    <div className="wordpress-login">
      <div className="word">
      <FaWordpress className='i' />
        <h3><span>WordPress</span>.ORG</h3>
      </div>
      <div className="container">
        <p>Log in to your WordPress.org account to contribute to WordPress, get help in the support forum, or rate and review themes and plugins.</p>
        <form className="label-1">
          <label>Username or Email address</label>
          <div>
            <input type="text" required />
          </div>
        </form>
        <form className="label-2">
          <label>Password</label>
          <div className="input-cont">
            <IoEyeOutline  className='icons'/>
            <input type="password" required />
          </div>
        </form>
        <label className="check">
          <input type="checkbox" id="check" />Remember me
        </label>
        <div className="btn">
          <button type="button"onClick={() => window.location.href = 'https://www.wordpress.com'}>Log in</button>
        </div>
      </div>
      <div className="anchor">
        <Link href="#">Lost Password?</Link> .
        <Link href="#"
        onClick={() => window.location.href = 'https://wordpress.com/start'}
        >Create account</Link>
      </div>
      <div className="select-container">
        <select id="language-locales" name="locale">
          {/* Add options here */}
          <option value="en_US" selected="selected">English</option>
          <option value="fa_AF">(فارسی )(افغانستان)</option><option value="gax">Afaan Oromoo</option><option value="af">Afrikaans</option><option value="so_SO">Afsoomaali</option><option value="arg">Aragonés</option><option value="frp">Arpitan</option><option value="ast">Asturianu</option><option value="ibo">Asụsụ Igbo</option><option value="az_TR">Azərbaycan Türkcəsi</option><option value="az">Azərbaycan dili</option><option value="id_ID">Bahasa Indonesia</option><option value="ms_MY">Bahasa Melayu</option><option value="jv_ID">Basa Jawa</option><option value="su_ID">Basa Sunda</option><option value="bs_BA">Bosanski</option><option value="bre">Brezhoneg</option><option value="ca">Català</option><option value="bal">Català (Balear)</option><option value="ca_valencia">Català (Valencià)</option><option value="ceb">Cebuano</option><option value="sna">ChiShona</option><option value="pcd">Ch’ti</option><option value="co">Corsu</option><option value="me_ME">Crnogorski jezik</option><option value="cy">Cymraeg</option><option value="da_DK">Dansk</option><option value="de_DE">Deutsch</option><option value="de_CH">Deutsch (Schweiz)</option><option value="de_CH_informal">Deutsch (Schweiz, Du)</option><option value="de_DE_formal">Deutsch (Sie)</option><option value="de_AT">Deutsch (Österreich)</option><option value="dsb">Dolnoserbšćina</option><option value="et">Eesti</option><option value="en_US" selected="selected">English</option><option value="en_AU">English (Australia)</option><option value="en_CA">English (Canada)</option><option value="en_NZ">English (New Zealand)</option><option value="art_xpirate">English (Pirate)</option><option value="en_ZA">English (South Africa)</option><option value="en_GB">English (UK)</option><option value="es_ES">Español</option><option value="es_AR">Español de Argentina</option><option value="es_CL">Español de Chile</option><option value="es_CO">Español de Colombia</option><option value="es_CR">Español de Costa Rica</option><option value="es_EC">Español de Ecuador</option><option value="es_GT">Español de Guatemala</option><option value="es_HN">Español de Honduras</option><option value="es_MX">Español de México</option><option value="es_PE">Español de Perú</option><option value="es_PR">Español de Puerto Rico</option><option value="es_DO">Español de República Dominicana</option><option value="es_UY">Español de Uruguay</option><option value="es_VE">Español de Venezuela</option><option value="eo">Esperanto</option><option value="eu">Euskara</option><option value="ewe">Eʋegbe</option><option value="fr_FR">Français</option><option value="fr_BE">Français de Belgique</option><option value="fr_CA">Français du Canada</option><option value="fur">Friulian</option><option value="fy">Frysk</option><option value="fo">Føroyskt</option><option value="ga">Gaelige</option><option value="gl_ES">Galego</option><option value="gd">Gàidhlig</option><option value="hau">Harshen Hausa</option><option value="hsb">Hornjoserbšćina</option><option value="hr">Hrvatski</option><option value="ido">Ido</option><option value="kin">Ikinyarwanda</option><option value="it_IT">Italiano</option><option value="kal">Kalaallisut</option><option value="cor">Kernewek</option><option value="sw">Kiswahili</option><option value="mfe">Kreol Morisien</option><option value="hat">Kreyol ayisyen</option><option value="kmr">Kurdî</option><option value="lv">Latviešu valoda</option><option value="lt_LT">Lietuvių kalba</option><option value="li">Limburgs</option><option value="lmo">Lombardo</option><option value="lb_LU">Lëtzebuergesch</option><option value="lij">Lìgure</option><option value="hu_HU">Magyar</option><option value="mg_MG">Malagasy</option><option value="mlt">Malti</option><option value="nl_NL">Nederlands</option><option value="nl_BE">Nederlands (België)</option><option value="nl_NL_formal">Nederlands (Formeel)</option><option value="lin">Ngala</option><option value="pcm">Nigerian Pidgin</option><option value="nb_NO">Norsk bokmål</option><option value="nn_NO">Norsk nynorsk</option><option value="oci">Occitan</option><option value="lug">Oluganda</option><option value="uz_UZ">O‘zbekcha</option><option value="pap_AW">Papiamento</option><option value="pap_CW">Papiamentu</option><option value="pl_PL">Polski</option><option value="pt_PT">Português</option><option value="pt_PT_ao90">Português (AO90)</option><option value="pt_AO">Português de Angola</option><option value="pt_BR">Português do Brasil</option><option value="fuc">Pulaar</option><option value="sq_XK">Për Kosovën Shqip</option><option value="kaa">Qaraqalpaq tili</option><option value="tah">Reo Tahiti</option><option value="ro_RO">Română</option><option value="roh">Rumantsch</option><option value="rhg">Ruáinga</option><option value="srd">Sardu</option><option value="sq">Shqip</option><option value="ssw">SiSwati</option><option value="scn">Sicilianu</option><option value="sk_SK">Slovenčina</option><option value="sl_SI">Slovenščina</option><option value="fi">Suomi</option><option value="sv_SE">Svenska</option><option value="syr">Syriac</option><option value="tl">Tagalog</option><option value="kab">Taqbaylit</option><option value="mri">Te Reo Māori</option><option value="vi">Tiếng Việt</option><option value="twd">Twents</option><option value="tuk">Türkmençe</option><option value="tr_TR">Türkçe</option><option value="vec">Vèneto</option><option value="wol">Wolof</option><option value="yor">Yorùbá</option><option value="fon">fɔ̀ngbè</option><option value="xho">isiXhosa</option><option value="zul">isiZulu</option><option value="is_IS">Íslenska</option><option value="cs_CZ">Čeština</option><option value="szl">Ślōnskŏ gŏdka</option><option value="el">Ελληνικά</option><option value="bel">Беларуская мова</option><option value="bg_BG">Български</option><option value="os">Ирон</option><option value="kir">Кыргызча</option><option value="mk_MK">Македонски јазик</option><option value="mn">Монгол</option><option value="ru_RU">Русский</option><option value="sah">Сахалыы</option><option value="sr_RS">Српски језик</option><option value="tt_RU">Татар теле</option><option value="tg">Тоҷикӣ</option><option value="uk">Українська</option><option value="kk">Қазақ тілі</option><option value="hy">Հայերեն</option><option value="he_IL">עִבְרִית</option><option value="ug_CN">ئۇيغۇرچە</option><option value="ur">اردو</option><option value="arq">الدارجة الجزايرية</option><option value="ar">العربية</option><option value="ary">العربية المغربية</option><option value="bcc">بلوچی مکرانی</option><option value="skr">سرائیکی</option><option value="snd">سنڌي</option><option value="fa_IR">فارسی</option><option value="ckb">كوردی‎</option><option value="haz">هزاره گی</option><option value="ps">پښتو</option><option value="azb">گؤنئی آذربایجان</option><option value="dv">ދިވެހި</option><option value="nqo">ߒߞߏ</option><option value="ne_NP">नेपाली</option><option value="brx">बोडो‎</option><option value="sa_IN">भारतम्</option><option value="bho">भोजपुरी</option><option value="mr">मराठी</option><option value="mai">मैथिली</option><option value="hi_IN">हिन्दी</option><option value="as">অসমীয়া</option><option value="bn_BD">বাংলা</option><option value="bn_IN">বাংলা (ভারত)</option><option value="pa_IN">ਪੰਜਾਬੀ</option><option value="gu">ગુજરાતી</option><option value="ory">ଓଡ଼ିଆ</option><option value="ta_LK">தமிழ்</option><option value="ta_IN">தமிழ்</option><option value="te">తెలుగు</option><option value="kn">ಕನ್ನಡ</option><option value="ml_IN">മലയാളം</option><option value="si_LK">සිංහල</option><option value="th">ไทย</option><option value="lo">ພາສາລາວ</option><option value="bo">བོད་ཡིག</option><option value="dzo">རྫོང་ཁ</option><option value="my_MM">ဗမာစာ</option><option value="ka_GE">ქართული</option><option value="tir">ትግርኛ</option><option value="am">አማርኛ</option><option value="km">ភាសាខ្មែរ</option><option value="tzm">ⵜⴰⵎⴰⵣⵉⵖⵜ</option><option value="zgh">ⵜⴰⵎⴰⵣⵉⵖⵜ</option><option value="zh_SG">中文</option><option value="ja">日本語</option><option value="zh_CN">简体中文</option><option value="zh_TW">繁體中文</option><option value="zh_HK">香港中文</option><option value="ko_KR">한국어</option><option value="art_xemoji">🌏🌍🌎 (Emoji)</option>	
        </select>
      </div>
    </div>
  );
};

export default WordpressLogin;

