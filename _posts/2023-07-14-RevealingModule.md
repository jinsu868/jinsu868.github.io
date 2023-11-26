---
title: "[디자인패턴] 노출모듈 패턴"
toc: true
toc_sticky: true
categories: 
    - 디자인패턴
tags:
    - 디자인패턴
    - CS
typora-root-url: ../
---

<br>



# *Revealing Module Pattern*

즉시 실행 함수를 통해 `private`, `public` 과 같은 접근 제어자를 만든느 패턴이다.

자바 스크립트에서는 접근 제어자가 존재하지 않고 전역 범위에서 스크립트가 실행된다. 때문에 접근 제어자를 사용하고 싶으면 노출모듈 패턴을 통해서 public, private 접근 제어자를 만들어서 사용해야 한다.

<br><br>



# *그렇다면 즉시 실행 함수란 무엇일까?*

```javascript
(function () {
  console.log("TEST");
})();
```

> 즉시 실행함수는 선언과 동시에 바로 호출되는 함수이다. 재사용이 불가능하고 초기화, 라이브러리 전역 변수 충돌을 피하기 위해 사용한다.

<br>

<br>



# *접근 제어자*

`public` : 클래스에서 정의된 함수, 자식, 외부 클래스 모두 접근 가능

`protected` : 클래스에서 정의된 함수, 자식 클래스에서만 접근 가능

`private` : 클래스에 정의된 함수에서만 접근 가능

<br>

<br>



# *노출모듈 패턴 장단점*

### 장점

* 깔끔한 접근 제어 방법 제공
* private 데이터 제공
* 전역변수를 덜 더럽힌다.



### 단점

* private 메소드에 접근 방법이 없음
* private 메소드에 대해 함수를 확장하는 게 어려움
* private 메소드를 참조하는 public 메소드를 수정하기 어려움







