export async function GetNewIcons() {
  const xml_url = 'https://fastly.jsdelivr.net/gh/Oblatum/Oblatum-IconPack-Reborn@master/app/src/main/res/xml/drawable.xml'
  const xml = await fetch(xml_url).then(response => response.text())
  return xml
}
