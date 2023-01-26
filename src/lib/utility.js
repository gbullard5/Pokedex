const capatalize = (value) =>  value.charAt(0).toUpperCase() +value.slice(1)

const formatName = (name) => {
    let formatted;
  
    switch(name){
      case 'nidoran-f':
        formatted = 'nidoran (F)';
        break;
      case 'nidoran-m':
        formatted = 'nidoran (M)';
        break;
      case 'mr-mime':
        formatted = 'mr.mime';
        break;
      default:
        formatted = name;
    }
  
    return capatalize(formatted);
   };

export{
    capatalize as default,
    formatName,
}