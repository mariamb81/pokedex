
export const getDataByName = (name, list = []) => {
    return list.filter(
        data => data.name.toLowerCase().includes(name.toLowerCase())
    );
}

//capitalizes first letter and removes '-'
const formatString = (str, upperCase = false) => {
    if(upperCase) {
        str = str.charAt(0).toUpperCase() + str.slice(1);
    }
    str = str.replace('-', ' ');
    return str;
}
//pass in an object and format the name data 
export const formatData =  (object) => {
    const keysToFormat = ['abilities', 'moves', 'stats', 'types', 'name'];
    for(const key in object) {
        // console.log(object[key]);
        if(keysToFormat.includes(key)) {
            for(const it in object[key]) {
                switch(key) {
                case 'name': {
                    object.name = formatString(object[key], true);
                    break;
                }
                case 'abilities': {
                    const abilityName = object[key][it].ability.name;
                    object[key][it].ability.name = formatString(abilityName);
                    break;
                }
                case 'types': {
                    const typeName = object[key][it].type.name;
                    object[key][it].type.name = formatString(typeName);
                    break;
                }
                case 'stats': {
                    const statName = object[key][it].stat.name;
                    object[key][it].stat.name = formatString(statName);
                    break;
                }
                case 'moves': {
                    const moveName = object[key][it].move.name;
                    object[key][it].move.name = formatString(moveName);
                    break;
                }
                default: return {};
                };
            }
        }
    }
return object;
}