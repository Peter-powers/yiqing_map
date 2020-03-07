/*********************************************
 * 功能： 【对象映射】将objSrc对象中的属性值，赋值给objDes对象中的同名属性
 *********************************************/
export function objectMap(objDes, objSrc) {
  for(let item of Object.keys(objSrc)) {
    objDes[item] = objSrc[item];
  }
  return objDes;
}
