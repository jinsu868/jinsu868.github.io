---
title: "[Spring] MVC 기능"
toc: true
toc_sticky: true
categories: 
    - Spring
tags:
    - Spring
    - MVC
typora-root-url: ../
---



<br>



# 요청매핑

`@RequestMapping`

* @RequestMapping은 파라미터로 URL을 넣을 수 있는데 해당 URL로 호출이 오면 메서드가 실행된다. 여러개의 URL을 배열 형태로 받을 수도 있다.

* @RequestMapping은 HTTP 메서드를 지정하지 않으면 HTTP 메서드 종류에 상관없이 무조건 호출된다.
  * `@GetMapping`, `@PostMapping`, `@PatchMapping`, `@DeleteMapping` , `@PutMapping` 을 사용하면 HTTP 메서드에 따라 호출 여부를 결정하게 할 수 있다.
  * @RequestMapping 파라미터에 Method를 직접 지정해서 전달할 수도 있다.

<br>





`@RestController`

* @Controller + @ResponseBody 이다.
* 원래 @Controller 는 반환값이 String이면 이것을 View 이름으로 인식하고 화면을 랜더링한다.
* @ResponseBody가 있으면 바로 HTTP 메시지 바디로 입력한다.

<br>





`@PathVariable`

```java
@GetMapping("/api/{userId}")
public String api(@PathVariable("userId") String userId) {
}
```

* @PathVariable의 이름과 파마미터 이름이 같으면 생략할 수 있다.

<br><br><br>





# HTTP 요청 - 정보 조회

```java
@Slf4j
@RestController
public class MyController {
  @RequestMapping("/headers")
  public String headers(HttpServletRequest request, HttpServletResponse response,
                       HttpMethod httpMethod, Locale locale,
                       @RequestHeader MultiValueMap<String, String>, headerMap,
                       @RequestHeader("host") String host, @CookieValue(value = "myCookie", required = false)
                       String cookie){
  }
}
```

* `HttpMethod` : HTTP Method 종류가 들어있다.
* `Locale` : Locale 정보를 조회
* `@RequestHeader MultiValueMap<String, String> headerMap` : 모든 HTTP 헤더를 MultiValueMap 형태로 조회
* `@RequestHeader("host") String host` : 특정 HTTP 헤더 조회
* `Required` : 필수값 여부
* `@CookieValue(value = "myCookie", required = false) String cookie` : 특정 쿠키 조회

<br><br><br>





# HTTP 요청 파리미터

`@RequestParam` 

* 파라미터 이름으로 간단하게 조회할 수 있음.
* request.getParameter("parameterName") 으로 귀찮게 조회하지 않아도 Annotation 하나면 처리된다.
* 파라미터 이름과 동일하게 변수명을 지정하면 생략할 수 있다.
* 단순 타입이면 생략도 가능하지만 그냥 써주는게 좋다. (생략하게 되면 required=false가 기본적으로 적용된다.)
* `required`
  * 필수 파라미터 여부이다.
  * 기본값은 true이다.
* 주의점 
  * /request-param?username= 과 같이 파라미터 이름만 있고 값이 없는 경우 -> 빈문자로 들어온다.
  * /request-param 요청, @RequestParam(required = false) int age 와 같이 들어온 경우에 null이 들어왔는데 int에 입력하는 게 불가능하기 때문에 null을 받을 수 있는 `Integer` 로 변경하거나, `defaultValue` 를 사용해야 한다.
  * defaultValue를 설정하면 required 가 의미가 없어진다. 안들어오면 default 값으로 세팅되고 들어오면 들어온 값으로 세팅된다.
* 동일한 이름으로 여러개의 파라미터가 들어오면 MultiValueMap을 사용하자.

<br>





`@ModelAttribute`

* 요청 파라미터로 들어온 값들을 통해서 객체를 조립한다.
  * 해당 객체의 setter를 호출해서 값을 채우는 방식이다.
  * 파라미터 이름이 a이면 setA()메서드를 찾아서 호출한다.
* @ModelAttribute 도 생략할 수 있다. 그런데 @RequestParam도 생략이 가능하다. 그러면 어떻게 될까?
  * String, int, Integer 값은 단순한 타입은 `@RequestParam` 으로 매핑되고 나머지는 `ModelAttribute` 로 매핑된다.

<br>

<br>

<br>





# HTTP Body로 요청

HTTP body로 요청이 들어온 값은 `@RequestParam` 이나 `ModelAttribute` 로는 바인딩할 수 없다.



`HttpEntity` 

* HTTP header, body 정보를 편리하게 조회할 수 있다.
* HTTP 응답에도 사용된다.
* `RequestEntity`, `ResponseEntity` 는 HttpEntity를 상속받아서 기능을 제공한다.
  * RequestEntity 는 HttpMethod 와 url 정보를 추가할 수 있고 요청에서 사용된다.
  * ResponseEntity 는 HTTP 상태 코드 설정을 할 수 있고, 응답에서 사용된다.

<br>



`@RequestBody`

* @RequestBody를 사용하면 HTTP 메시지 바디 정보를 쉽게 조회할 수 있다.
* 헤더 정보가 따로 필요하면 `HttpEntity` 를 사용하거나 `@RequestHeader`  를 사용하면 된다.
* @RequestBody에 직접 객체를 지정할 수 있다. (메시지 컨버터가 내부적으로 Json 데이터를 객체로 변환해서 넣어준다.)
* @RequestBody는 생략할 수 없다. 생략하면 ModelAttribute가 적용된다.
* `주의점` : 요청 content-type이 application/json이어야 JSON을 처리할 수 있는 메시지 컨버터가 실행된다.

<br>



`@ResponseBody`

* @ResponseBody를 사용하면 응답 결과를 HTTP body 메시지에 직접 넣을 수 있다.
* @ResponseBody가 있으면 View Resolver가 실행되지 않는다.



### 정리

```java
@GetMapping("/api")
public void api(HttpServletResponse response) throws IOException {
  response.getWriter().write("ok");
}
```

* HttpServletResponse 객체를 통해서 HTTP 메시지 body에 ok라는 응답 메시지를 전달

<br>



```java
@GetMapping("/api")
public ResponseEntity<String> api() {
  return new ResponseEntity<>("ok", HttpStatus.OK);
}
```

* ResponseEntity는 HttpEntity를 상속받아서 헤더, 바디 정보를 가지고 있다. 여기서 추가로 HTTP 응답 코드를 설정할 수 있다.

<br>



```java
@ResponseBody
@GetMapping("/api")
public String api() {
  return "ok";
}
```

* @ResponseBody가 붙으면 View Resolver가 호출되지 않고 HTTP 컨버터를 통해서 HTTP 메시지를 직접 입력할 수 있다. ResponseEntity도 동일하게 메시지 컨버터가 적용된다.

<br>



```java
@GetMapping("/api")
public ResponseEntity<MyObject> api() {
  MyObject obj = new MyObject();
  obj.setA("A");
  obj.setB(20);
  
  return new ResponseEntity<>(obj, HttpStatus.OK);
}
```

* HTTP 메시지 컨버터가 동작하고 JSON 형태로 객체가 변환되서 나간다.

<br>



```java
@ResponseStatus(HttpStatus.OK)
@ResponseBody
@GetMapping("/api")
public MyObj api() {
  MyObj obj = new MyObj();
  obj.setA("A");
  obj.setB(20);
  
  return obj;
}
```

* @ResponseStatus Annotation을 사용해서 응답 코드를 설정할 수 있다.

<br>

<br>

<br>



# HTTP 메시지 컨버터

JSON 데이터를 HTTP 메시지 바디에서 읽거나 쓰는 경우에는 HTTP 메시지 컨버터가 작동한다.

![img1](/assets/images/17_1.png){: width="70%"", height="40%""}

* 스프링은 HTTP 요청, 응답에서 @RequestBody, @ResponseBody를 사용하면 HTTP 메시지 컨버터가 작동한다.
* HTTP 메시지 컨버터는 요청, 응답에 모두 사용되고 클래스와 미디어타입을 체크해서 적절하게 처리한다.

<br>



**스프링 부트 기본 메시지 컨버터**

0 = ByteArrayMessageConverter 

* MediaType : * / * 
* classType : byte[]

1 = StringHttpMessageConverter

* MediaType : * / *
* classType : String

2 = MappingJackson2HttpMessageConverter

* MediaType : application/json
* classType : 객체, HashMap

<br>



예제로 확인해보자

#### StringHttpMessageConverter

```java
//content-type: application/json
 
@RequestMapping
void api(@RequestBody String data) {}
```

Media-Type 이 application/json으로 들어오고 class type 이 String인 경우

1. Converter 우선순위가 가장 높은 ByteArrayMessageConverter가 먼저 실행되는데 class Type이 byte가 아니기 때문에 통과된다.
2. 다음으로 StringHttpMessageConverter가 실행되는데 모든 미디어 타입을 처리하고 classType이 String이기 때문에 여기서 처리된다.

<br>



#### MappingJakson2HttpMessageConverter

```java
//content-type: application/json

@RequestMapping
void api(@RequestBody MyObj data) {}
```

Media-Type 이 application/json으로 들어오고 class type 이 객체인 경우

1. ByteArrayMessageConverter 가 실행되는데 class-type이 객체라서 통과
2. StirngHttpMessageConverter가 실행되는데 마찬가지로 class-Type이 객체라서 통과
3. MappingJakson2HttpMessageConverter가 실행된다. (Media-Type이 일치하고 객체가 들어오기 때문에)

<br>



#### 실패

```java
//content-type: text/html

@RequestMapping
void hello(@RequestBody MyObj data) {}
```

Media_Type 이 text/html으로 들어오고 class type이 객체인 경우

1. ByteArrayMessageConverter가 실행되는데 class-Type이 객체라서 패스
2. StringHttpMessageConverter가 실행되는데 class-Type이 객체라서 패스
3. MappingJakson2HttpMessageConverter가 실행되는데 Media-Type 불일치로 패스
4. `Fail`

<br>

<br>

<br>



# RequestMappingHandlerAdapter 구조



![img2](/assets/images/17_2.png){: width="70%"", height="40%""}



`ArgumentResolver` 에 대해서 자세히 알아보자.

Annotation 기반의 컨트롤러는 다양한 파라미터를 제공한다. HttpServlet, Model, @ReqeustParam, @ModelAttribute, @RequestBody, HttpEntity 등등 정말 많은 파라미터를 제공하는데 이걸 누가 넣어줄까?

정답은 ArgumentResolver가 넣어준다.

`RequestMappingHanlderAdapter` 는 `ArgumentResolver` 를 호출해서 컨트롤러에 필요한 파라미터 값을 채우고 나서 컨트롤러를 호출한다.



동작 방식은 다음과 같다.

`ArgumentResolver` 에서 컨트롤러에 필요한 파라미터를 지원하는지 체크하고 지원한다면 객체를 생성해서 어댑터로 넘긴다. 어댑터는 이 파라미터를 가지고 컨트롤러를 호출한다.

`ReturnValueHandler` 도 거의 비슷하게 작동한다. 컨트롤러의 반환값은 정말 다양하다. @ModelAndView, @ResponseBody, HttpEnttiy, String 등 정말 많은데 이것들을 잘 체크해서 응답값을 변환하고 처리한다.

<br>

<br>

<br>



#### 그렇다면 HTTP 메시지 컨버터는 어디에 존재할까?

![img3](/assets/images/17_3.png){: width="70%"", height="40%""}



HTTP 메시지 컨버터는 `ArgumentResolver` 와 `ReturnValueHandler`  가 사용한다.



















