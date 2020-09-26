import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const MainTab = () => {
  console.log('MainTab Working...');
  Promise.all([
    Icon.getImageSource('person-outline', 30),
    Icon.getImageSource('add-circle-outline', 30),
  ]).then((icons) => {
    // icons เป็น array ของ Icon ใน Promise
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            //------------------------------------------
            {
              // เป็นส่วนของ array ที่เก็บ screen ต่างๆ
              stack: {
                // ความหมายคือ การวางซ้อนกันของหน้าจอ ในแต่ละ children
                children: [
                  {
                    component: {
                      name: 'FirstScreen',
                      options: {
                        topBar: {
                          title: {
                            text: 'FirstScreen',
                          },
                        },
                        bottomTab: {
                          icon: icons[0],
                          iconColor: 'black',
                          selectedIconColor: 'skyblue',
                          selectedTextColor: 'skyblue',
                        },
                      },
                    },
                  },
                ],
              },
            },
            //------------------------------------------
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'SecondScreen',
                      options: {
                        topBar: {
                          title: {
                            text: 'SecondScreen',
                          },
                        },
                        bottomTab: {
                          icon: icons[1],
                          iconColor: 'black',
                          selectedIconColor: 'skyblue',
                          selectedTextColor: 'skyblue',
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  })
}
export default MainTab;
