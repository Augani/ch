import styled from 'styled-components'

/**
 * NOTE: UI kit changed so have to update this as component and document with Storybook letter on. Also remove flag images letter on.
 */

type countryName =
  | 'Afghanistan'
  | 'Aland-islands'
  | 'Albania'
  | 'Algeria'
  | 'American-samoa'
  | 'Andorra'
  | 'Angola'
  | 'Anguilla'
  | 'Antarctica'
  | 'Antigua-and-barbuda'
  | 'Argentina'
  | 'Armenia'
  | 'Aruba'
  | 'Australia'
  | 'Austria'
  | 'Azerbaijan'
  | 'Bahamas'
  | 'Bahrain'
  | 'Bangladesh'
  | 'Barbados'
  | 'Belarus'
  | 'Belgium'
  | 'Belize'
  | 'Benin'
  | 'Bermuda'
  | 'Bhutan'
  | 'Biot'
  | 'Bolivia'
  | 'Bonaire'
  | 'Bosnian'
  | 'Botswana'
  | 'Bouvet-island'
  | 'Brazil'
  | 'British-antarctic-territory'
  | 'British-virgin-islands'
  | 'Brunei'
  | 'Bulgaria'
  | 'Burkina-faso'
  | 'Burma'
  | 'Burundi'
  | 'Cambodia'
  | 'Cameroon'
  | 'Canada'
  | 'Cape-verde'
  | 'Cascadia'
  | 'Cayman-islands'
  | 'Centralafricanrepublic24'
  | 'Chad'
  | 'Chile'
  | 'China'
  | 'Christmas-island'
  | 'Cocos-islands'
  | 'Colombia'
  | 'Comoros'
  | 'Congo'
  | 'Congo-kinshasa'
  | 'Cook-islands'
  | 'Costa-rica'
  | 'Croatian'
  | 'Cuba'
  | 'Curacao'
  | 'Cyprus'
  | 'Czech-republic'
  | 'Denmark'
  | 'Djibouti'
  | 'Dominica'
  | 'Dominican-republic'
  | 'East-timor'
  | 'Ecuador'
  | 'Egypt'
  | 'El-salvador'
  | 'England'
  | 'Equatorial-guinea'
  | 'Eritrea'
  | 'Estonia'
  | 'Ethiopia'
  | 'European-union'
  | 'Ex-yugoslavia'
  | 'Falkland-islands'
  | 'Faroe-islands'
  | 'Fiji'
  | 'Finland'
  | 'France'
  | 'French-polynesia'
  | 'French-southern-territories'
  | 'Gabon'
  | 'Gambia'
  | 'Georgia'
  | 'Germany'
  | 'Ghana'
  | 'Gibraltar'
  | 'Greece'
  | 'Greenland'
  | 'Grenada'
  | 'Guadeloupe'
  | 'Guam'
  | 'Guatemala'
  | 'Guernsey'
  | 'Guinea-bissau'
  | 'Guinea'
  | 'Guyana'
  | 'Haiti'
  | 'Holy-see'
  | 'Honduras'
  | 'Hong-kong'
  | 'Hungary'
  | 'Iceland'
  | 'India'
  | 'Indonesia'
  | 'Iran'
  | 'Iraq'
  | 'Ireland'
  | 'Isle-of-man'
  | 'Israel'
  | 'Italy'
  | 'Ivory-coast'
  | 'Jamaica'
  | 'Jan-mayen'
  | 'Japan'
  | 'Jarvis-island'
  | 'Jersey'
  | 'Jordan'
  | 'Kazakhstan'
  | 'Kenya'
  | 'Kiribati'
  | 'Korea'
  | 'Kosovo'
  | 'Kuwait'
  | 'Kyrgyzstan'
  | 'Laos'
  | 'Latvia'
  | 'Lebanon'
  | 'Lesotho'
  | 'Liberia'
  | 'Libya'
  | 'Liechtenstein'
  | 'Lithuania'
  | 'Luxembourg'
  | 'Macau'
  | 'Macedonia'
  | 'Madagascar'
  | 'Malawi'
  | 'Malaysia'
  | 'Maldives'
  | 'Mali'
  | 'Malta'
  | 'Marshall-islands'
  | 'Martinique'
  | 'Mauritania'
  | 'Mauritius'
  | 'Mayotte'
  | 'Mexico'
  | 'Micronesia'
  | 'Moldova'
  | 'Monaco'
  | 'Mongolia'
  | 'Montenegro'
  | 'Montserrat'
  | 'Morocco'
  | 'Mozambique'
  | 'Myanmar'
  | 'Namibia'
  | 'Nauru'
  | 'Nepal'
  | 'Netherlands-antilles'
  | 'Netherlands'
  | 'New-caledonia'
  | 'New-zealand'
  | 'Nicaragua'
  | 'Niger'
  | 'Nigeria'
  | 'Niue'
  | 'Norfolk-island'
  | 'North-korea'
  | 'Northern-ireland'
  | 'Northern-mariana-islands'
  | 'Norway'
  | 'Oman'
  | 'Pakistan'
  | 'Palau'
  | 'Palestinian-territory'
  | 'Panama'
  | 'Papua-new-guinea'
  | 'Paraguay'
  | 'Peru'
  | 'Philippines'
  | 'Pitcairn'
  | 'Poland'
  | 'Portugal'
  | 'Puerto-rico'
  | 'Qatar'
  | 'Reunion'
  | 'Romania'
  | 'Russia'
  | 'Rwanda'
  | 'Saint Pierre And Miquelon24'
  | 'Saint Vincent And The Grenadines24'
  | 'Saint-barthelemy'
  | 'Saint-helena-and-dependencies'
  | 'Saint-helena'
  | 'Saint-kitts-and-nevis'
  | 'Saint-lucia'
  | 'Saint-martin'
  | 'Saint-pierre-and-miquelon'
  | 'Samoa'
  | 'San-marino'
  | 'Sao-tome-and-principe'
  | 'Saudi-arabia'
  | 'Scotland'
  | 'Senegal'
  | 'Serbia'
  | 'Seychelles'
  | 'Sierra-leone'
  | 'Singapore'
  | 'Sint-Maarten'
  | 'Sint-eustatius'
  | 'Slovakia'
  | 'Slovenia'
  | 'Smom'
  | 'Solomon-islands'
  | 'Somalia'
  | 'South-africa'
  | 'South-georgia'
  | 'South-sudan'
  | 'Spain'
  | 'Spm'
  | 'Sri-lanka'
  | 'Sudan'
  | 'Suriname'
  | 'Svalbard'
  | 'Svg'
  | 'Swaziland'
  | 'Sweden'
  | 'Switzerland'
  | 'Syria'
  | 'Taiwan'
  | 'Tajikistan'
  | 'Tanzania'
  | 'Thailand'
  | 'Thumb'
  | 'Timor-leste'
  | 'Togo'
  | 'Tokelau'
  | 'Tonga'
  | 'Trinidad-and-tobago'
  | 'Tunisia'
  | 'Turkey'
  | 'Turkmenistan'
  | 'Turks-and-caicos-islands'
  | 'Tuvalu'
  | 'Uganda'
  | 'Ukraine'
  | 'United-arab-emirates'
  | 'United-kingdom'
  | 'United-states'
  | 'Uruguay'
  | 'Uzbekistan'
  | 'Vanuatu'
  | 'Vatican-city'
  | 'Venezuela'
  | 'Vietnam'
  | 'Virgin-islands'
  | 'Wales'
  | 'Wallis-and-futuna'
  | 'Western-sahara'
  | 'Yemen'
  | 'Zambia'

const CountryFlag = styled.i<{ name: countryName }>`
  display: block;
  width: 1.5625rem;
  height: 1.25rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('assets/images/country-flags/${props =>
    props.name}-flag.png');
`

export default CountryFlag
