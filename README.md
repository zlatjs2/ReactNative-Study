# ReactNative Study
## CRNA 구조와 package.json

- package.json 이 왜 만들어졌고 어떤 의미일까?
- 기본적으로 설정되는 내용은 어떤 의미인가?
- 왜 이러한 구조로 만들어졌을까?

__nodeJS란?__

- Chrome V8 Javascript 엔진으로 빌드된 Javascript 런타임(프로그래밍 언어가 구동되는 환경)
- 나 노드로 서버 만들 줄 안다. => 백엔드 개발자
- 나 노드로 의존성 모듈 관리하고 CLI를 Node.js 위에서 돌릴 줄 알아. => 프론트엔드 개발자

node.js로 프로젝트를 진행하게 되면 자연스레 필요한 모듈들을 npm으로 설치를 해서 사용하게 된다. 

npm이라는 것은 __node.js에서 사용 가능한 모듈들을 패키지화 시켜 모아놓은 것__ 인데, npm은 프로젝트에 대한 설정을 `package.json`이라는 파일에 의존하고 있다.


### 그렇다면, package.json이란?

프로젝트의 패키지들에 대한 관리를 하는 파일이다.
패키지들의 버전을 기록해준다.

package.json이 작성되고 나면 프로젝트의 루트경로에 파일을 두고 `npm install` 명령어를 입력하면, 명시된 `dependencies` 부분의 모듈들을 모두 설치 해 줌

- JSON형식으로 작성
- `name`과 `version`은 필수 (누락되면 설치가 안됨)

#### create-react-native-app install을 한 package.json

```
{
  "name": "example-1",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "react-native-scripts": "1.13.1",
    "jest-expo": "26.0.0",
    "react-test-renderer": "16.3.0-alpha.1"
  },
  "main": "./node_modules/react-native-scripts/build/bin/crna-entry.js",
  "scripts": {
    "start": "react-native-scripts start",
    "eject": "react-native-scripts eject",
    "android": "react-native-scripts android",
    "ios": "react-native-scripts ios",
    "test": "jest"
  },
  "jest": {
    "preset": "jest-expo"
  },
  "dependencies": {
    "expo": "^26.0.0",
    "react": "16.3.0-alpha.1",
    "react-native": "0.54.0"
  }
}

```

```
{
	"name" : 해당 모듈의 이름을 정의,
	"version" : 해당 모듈의 버전을 정의,
	"private" : 패키지를 공개(false)/비공개(true) 할 것인지를 정의,
	"devDependencies" : 운영이 아닌 개발 단계에서만 필요한 의존성 모듈(테스트 도구, 웹팩, 바벨 등)을 정의,
	"main" : 이 패키지의 메인 파일이 뭔지 정의,
	"scripts" : package.json이 들어 있는 폴더에서 추가로 실행 할 스크립트 명령어를 정의,
	"dependencies" : 실제 운영되어질 단계에서 필요한 의존성 모듈을 정의,	
}
```


## Getting Started

__Quick Start__

Node가 설치되어있는 가정하에 아래와 같은 코드로 글로벌하게 설치한다.

```
npm install -g create-react-native-app
```

그리고 프로젝트 폴더를 생성한 후, 

npm start를 하면 개발 서버가 시작되고 터미널에 QR 코드가 인쇄된다.

### Running your React Native application 

IOS 또는 Android 폰에 Expo 앱을 설치하고, 컴퓨터와 동일한 무선 네트워크에 연결한다. 앱을 열어서 QR코드를 스캔하여 프로젝트를 연다.

텍스트 편집기에서 App.js를 열고 일부를 수정한뒤 저장하면 응용 프로그램이 자동으로 다시 로드된다. 


__Building Projects with Native Code__

프로젝트에 원시 코드를 작성해야하는 경우 이 방법에 따른다. 
- ReactNative를 기존 애플리케이션에 통합하는 경우
- Create React Native App에서 내보내야 하는 경우

개발 운영 체제에 따라 약간씩 다르기때문에 선택하여 각 방법에 맞게 설치한다.

__종속적 설치__
- Node(6버전 이상), Watchman(시스템의 변화를 감시, 성능 향상을 위해 설치)
- The React Native CLI
- XCode(+ Command Line Tools)


## Learn the Basics

React와 비슷하지만 웹 구성 요소가 아닌 기본 구성 요소를 사용한다.

기본 구성요소를 이해하려면 JSX, components, state, props와 같은 기본적인 개념을 이해해야 한다.

이미 리액트를 알고 있다고 해도, 네이티브 컴포넌트와 같은 특정 항목을 알아야 한다.

- ES2015 지원한다.
  - `import`, `from`, `class`, `extends` 등
- 대부분 마크업 언어 안에 코드를 임베드 하지만 리액트는 JSX를 사용하여 코드 내에 마크업 언어를 작성할 수 있다. (HTML과 유사)

### Component

ReactNative 애플리케이션을 구축 할 때 새로운 컴포넌트들을 많이 만드는데 필요한 것은 렌더링하는 JSX를 반환하는 렌더링 함수뿐이다.

이 구성요소가 좀 더 재미난 일을 수행하게 하려면 Props에 대해 알아야 한다. 

## Props

### Props

대부분의 구성 요소는 다른 매개 변수와 함께 작성 될 때 사용자 정의를 할 수 있다. 이를 Props라고 한다. 

매개 변수를 JSX에 포함시키기 위해서는  `{`, `}` 중괄호로 묶여 있다. 

JSX에서는 중괄호 안에 `Javascript 표현식`을 넣을 수 있다.

구성요소 뿐만 아니라 컴포넌트 자신도 Props를 가질 수 있는데 이렇게 하면 여러곳에서 재사용할 수 있는 컴포넌트를 만들 수 있다. 각 위치마다 다른 성질이 있지만 render 함수에서 `this.props`만 참조하면 된다. (예제 참고)

시간이 지남에 따라 앱을 변경하는 방법을 배우려면 State를 알아야 한다.

## State
### State

컴포넌트를 제어하는 두가지의 구성 요소가 있는데 `Props`는 부모에 의해 정해지며, 변경 될 데이터의 경우 `state`를 사용한다. 

실제 응용 프로그램에서는 새로운 데이터가 서버에서 도착했을 때, setState를 통해 상태를 수정할 수 있고,
Redux 같은 상태 컨테이너를 사용하여 데이터 흐름을 제어 할 수 있습니다.이 경우 setState를 직접 호출하는 것이 아니라 Redux을 사용하여 상태를 변경하게 된다.

setState가 호출되면 컴포넌트를 다시 렌더링합니다.

State는 React와 같은 방식으로 작동한다.

## Style

React Native는 자바 스크립트를 사용하여 스타일을 지정하면 된다. 

css의 방식과 일치하지만 낙타케이스를 사용하여 작성한다.

style의 prop은 배열로도 작성할 수 있다. 

create 함수를 사용하여 여러 스타일들을 한곳에서 정의 할 수 있다.

## Height and Width

구성 요소의 크기를 설정하는 가장 간단한 방법은 width와 height 스타일을 추가하는 것이다. React Native의 모든 치수는 단위가 없다.

### flex

## Layout with Flexbox

- flexDirection: 방향. row, column

- alignItems: 정렬. row, column, flex-start, center, flex-end, stretch 

- justifyContent: flex-start, center, flex-end, space-around, space-between, space-evenly

## Handling Text Input

텍스트를 입력할 수 있는 기본 구성요소

onChangeText 은 입력값이 변경될 때마다 함수를 호출 

onSubmitEditing 은 입력값이 제출 될 때 함수를 호출

## Handling Touches

```
  <Button
    onPress={() => {
      Alert.alert('You tapped the button!');
    }}
    title="Press Me"
  />
```

버튼을 누를때 'onPress' 기능이 호출

- TouchableHighlight: 버튼, 링크. 누르는 순간 뷰의 배경이 어두워짐
- TouchableNativeFeedback(android): 터치에 반응
- TouchableOpacity: 버튼의 불투명도. 누르고 있는 동안 배경이 불투명해짐
- TouchableWithoutFeedback: 탭 동작은 처리하나 피드백을 표시하지 않을때 사용
- onLongPress: 일정 시간 동안 누르고 있으면 볼 수 있다.
- 
## Using a ScrollView

horizontal 속성을 설정하여 세로, 가로의 스크롤을 할 수 있다. 

maximumZoomScale, minimumZoomScale props를 설정하여 사용자가 확대/축소를 할 수 있다.

pagingEnabled을 사용하여 밀어서 더보기와 같은 기능을 구현할 수 있다.

## Using List Views

데이터 목록을 표시하기 위함

### FlatList

시간이 지남에 따라 항목 수 가 변경 될 수 있는 긴 데이터 목록에 적합
### SectionList

모든 요소를 한번에 표시


## Networking

### Using Fetch

React Native는 네트워킹 요구에 맞는 Fetch API를 제공한다.

__Making requests__

```
  fetch('https://mywebsite.com/mydata.json');
```

fetch는 추가 헤더를 지정하거나 POST 요청을 할 수 있다.

```
  ftech('https://mywebsite.com/mydata.json', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue',
    })
  });
```

__Handling the response__

```
  function getMoviesFromApiAsync() {
    return fetch('https://mywebsite.com/mydata.json')
            .then((response) => response.json())
            .then((responseJson) => {
              return responseJson.movies;
            })
            .catch((error) => {
              console.error(error);
            });
  }
```

또는 `async/await` 구문을 사용할 수도 있다.

```
  async function getMoviesFromApi() {
    try {
      let response = await fetch('https://mywebsite.com/mydata.json');
      let responseJson = await response.json();
      return responseJson.movies;
    } catch (error) {
      console.error(error);
    }
  }
```


__Using Other Networking Libraries__

frisbee, axios 등을 사용 할 수 있고 원하는 경우 XMLHttpRequest API를 사용할 수 있다.

```
  var request = new XMLHttpRequest();
  request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
      return;
    }

    if (request.status === 200) {
      console.log('success', request.responseText);
    } else {
      console.warn('error');
    }
  }

  request.open('GET', 'https://mywebsite.com/endpoint/');
  request.send();
```

### WebSocket

React Native는 단일 TCP 연결을 통해 전이중 통신 채널을 제공하는 프로토콜인 WebSockets 도 지원한다.

__TCP란?__

- 트랜스포트 계층: IP가 하지 않았던 데이터의 무결성을 보증
- 목적지의 상대에 대해서 커넥션을 연결
- 커넥션을 사용해 데이터의 누락을 체크하고, 데이터의 도달을 보증
- TCP로 접속된 커넥션에서 전송하는 데이터가 어느 애플리케이션으로 전달될지 결정하는 것 = 포트번호
  - HTTP는 기본적으로 80번 포트

```
  var ws = new WebSocket('ws://host.com/path');
  ws.onopen = () => {
    // connection oppened
    ws.send('something); // send a message
  };

  ws.onmessage = (e) => {
    // a message was received
    console.log(e.data);
  };

  ws.onerror = (e) => {
    // an error occurred
    console.log(e.message);
  };

  ws.onclose = (e) => {
    // connection closed
    console.log(e.code, e.reason);
  };
```

## components and APIs

### Basic Components

React Native의 기본 구성요소

__View__ 

UI 구현을 위한 가장 베이직한 컴포넌트

__Text__

__Image__

__TextInput__

__ScrollView__

__StyleSheet__


### User Interface

공통 사용자 인터페이스 컨트롤

__Button__

__Picker__

iOS, Android에서 피커 구성요소를 렌더링 ? 

__Slider__

__Switch__

boolean을 렌더링


### List Views

`ScrollView`와 다르게 __현재 화면에 표시되는 요소만 렌더링__

__FlatList__

실행 가능한 스크롤 목록

__SectionList__

`FlatList`와 같지만 단락 목록용 (좀더 작은 범위?)

### iOS Components and APIs

__ActionSheetIOS__ ??????

__AlertIOS__

__DatePickerIOS__

__ImagePickerIOS__ ?????

__NavigatorIOS__

__ProgressViesIOS__

__PushNotificationIOS__

__SegmentedControllIOS__

__TabBarIOS__



### Android Components and APIs

__BackHandler__

__DatePickerAndroid__

__DrawerLayoutAndroid__ ?????

__PermissionsAndroid__ ??????

__ProgressBarAndroid__

__TimePickerAndroid__

__ToastAndroid__

__ToolbarAndroid__

__viewPagerAndroid__ ????? 좌우를 왜바꿈?????


### Others

다시 읽어보기 (패스)


## Platform Specific Code

React Native는 코드를 쉽게 구성하고 플랫폼별로 분리하는 두 가지 방법을 제공한다.

- 플랫폼 모듈을 사용하는 방법
- 플랫폼 별 파일 확장명을 사용하는 방법


### Platform module 

플랫폼을 감지하여 그에 맞는 모듈을 제공

```
	import { Platform, StyleSheet } from 'react-native';
	
	const styles = StyleSheet.create({
		height: Platform.OS === 'ios' ? 200 : 100,
	});

```
 
Platform.OS를 키로 가지는 객체가 주어지면 Platform.select라는 메소드를 사용할 수 있다.

```
	import { Platform, StyleSheet } from 'react-native';
	
	const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    ...Platform.select({
	      ios: {
	        backgroundColor: 'red',
	      },
	      android: {
	        backgroundColor: 'blue',
	      },
	    }),
	  },
	});
```




## Navigating Between Screens

React Navigation은 iOS와 Android 모두에서 일반적은 스택 탐색 및 탭 탐색 패턴을 제공한다.

자바스크립트 구현이므로 redux와 같은 상태 관리 라이브러리와 함께 사용할 수 있다.


### React Navigation


```
npm install --save react-navigation
```


```
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
	Home: { screen: HomeScreen },
	Profile: { screen: ProfileScrren },
});

```

- 탐색 옵션을 설정할 수 있다.
- 라우터를 사용하면 정의 등이 편리하다
- `Animated` 라이브러리를 사용하여 애니메이션을 사용할 수 있다.


### NavigatorIOS

```
<NavigatorIOS
	initialRoute=({
		component: MyScene,
		title: 'My Initial Scene',
		passProps: { myProp: 'foo' }
	})
/>
```

- `passProps`: 전달해야하는 모든 props를 지정
- navigator 객체는 필요에 따라 push, pop을 호출 할 수 있다.
- UIKit 탐색 기능을 기본적으로 활용하므로 뒤로버튼과 제목을 자동으로 렌더링 한다. 


#### Props, State example

함수형 컴포넌트와 클래스형 컴포넌트의 주요 차이점은은 `state`와 `LifeCycle`이 빠져있다는 점이다.



