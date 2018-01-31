export const defectsOpenInTestManuf = ({ defectsOpen }) => {
  return defectsOpen.filter(i => i.inFactoryType === 'TESTE')
}

export const defectsOpenInDevManuf = ({ defectsOpen }) => {
  return defectsOpen.filter(i => i.inFactoryType === 'DESENV')
}
