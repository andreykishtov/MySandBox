const renderSubMenu = options => {
  const menuOptions = options.map(option => {
    const display = option.link ? <a href={option.link}>{option.text}</a> : <span>{option.text}</span>;
    return <li key={option.id}>{display}</li>;
  });

  let subMenu;
  if (option.options && option.options.length > 0) {
    subMenu = this.renderSubMenu(option.options);
  }

  return (
    <li>
      {display}
      {subMenu}
    </li>
  );
};

// renderSubMenu(options) {
//   const menuOptions = options.map(option => {
//     ...
//     let subMenu;
//     if (option.options && option.options.length > 0) {
//       subMenu = this.renderSubMenu(option.options)
//     }
//     return (
//       <li>
//         { display }
//         { subMenu }
//       </li>
//     );
//   };
// ...
// }
