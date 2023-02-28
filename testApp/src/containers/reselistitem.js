import List from '../components/list';
import ListItem from '../components/ListItem';
import LoadingIndicator from '../components/LoadingIndicator';
import CustomMsg from '../components/custommsg/custommsg';

const ReSelectListItem = (item_list, loading, error) => {

  let item_list2;

  // console.log(item_list);
  // console.log(typeof(item_list));
  // console.log("typeof");
  // console.log(item_list.constructor)

  item_list2 = item_list.item_list;
  /*
    if (typeof (item_list) == "object" && item_list.constructor == Array) {
      item_list2 = item_list;
      console.log("Test1");
    }
    else if (typeof (item_list.item_list) == "object" && item_list.item_list == Array) { 
    item_list2 = item_list.item_list;
    console.log("test2");
  }
    else
  item_list2 = item_list.item_list;
  
  */

  //console.log("In list item");
  console.log(item_list2)

  return (
    <div className='maindiv'>
      {
      //loading && <List component={LoadingIndicator} />
      }

      {error !== false && <p>{error}</p>}

      {item_list2.length > 0 && item_list2.map((item) => (<ul  className='maindiv_ul'><li key={item.ItemId} className='maindiv_li'>{item.Category} / {item.ItemName}</li></ul>))}
    </div>
  );

}

export default ReSelectListItem