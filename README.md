# ReactNative Study

## Getting Started

__Quick Start__

Node가 설치되어있는 가정하에 아래와 같은 코드로 글로벌하게 설치한다.

```
npm install -g create-react-native-app
```

그리고 프로젝트 폴더를 생성한 후, 

```
create-react-native-app example

cd example
npm start
```
npm start를 하면 개발 서버가 시작되고 터미널에 QR 코드가 인쇄된다.

### Running your React Native application 

IOS 또는 Android 폰에 Expo 앱을 설치하고, 컴퓨터와 동일한 무선 네트워크에 연결한다. 앱을 열어서 QR코드를 스캔하여 프로젝트를 연다.

텍스트 편집기에서 App.js를 열고 일부를 수정한뒤 저장하면 응용 프로그램이 자동으로 다시 로드된다. 


__Building Projects with Native Code__



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

구성요소 뿐만 아니라 컴포넌트 자신도 Props를 가질 수 있는데 이렇게 하면 여러곳에서 재사용할 수 있는 컴포넌트를 만들 수 있다. 각 위치마다 다른 성질이 있지만 render 함수에서 `this.props`만 참조하면 된다.

시간이 지남에 따라 앱을 변경하는 방법을 배우려면 State를 알아야 한다.