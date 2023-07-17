---
title: "[Spring] MVC 구조"
categories: 
    - Spring
tags:
    - Spring
    - MVC
typora-root-url: ../
---









## 스프링 MVC 구조

![img1](/assets/images/16_1.png){: width="70%"", height="40%""}



스프링 MVC는 FrontController 패턴으로 구현되어 있다. Dispatcher Servlet(FrontController)에서 공통되는 로직을 처리하고 요청으로 들어온 URL에 해당하는  컨트롤러를 호출한다.







### 동작 순서

1. `핸들러 조회` : 핸들러 매핑 map을 뒤져서 요청한 URL에 해당하는 컨트롤러가 있는지 확인한다.
2. `핸들러 어댑터 조회` : 해당 핸들러를 실행할 수 있는 어댑터가 존재하는 지 확인한다.
3. `핸들러 어댑터 실행` : 핸들러 어댑터에 컨트롤러를 넘겨서 실행시킨다.
4. `핸들러 실행` : 핸들러 어댑터가 넘겨받은 컨트롤러를 실행시킨다.
5. `ModelAndView 반환` : 핸들러 어댑터는 ModelAndView를 리턴한다.
   * 컨트롤러의 스팩은 다를 수 있다. 때문에 어댑터는 상황에 맞게 적절하게 처리해서 ModelAndView를 Dispatcher Servlet에 넘긴다.
6. `ViewResolver 호출`  : DIspatcher Servlet은 어댑터에게 받은 ModelAndView의 View Path를 ViewResolver에 넘겨서 논리 이름을 물리 이름으로 바꾸고 화면을 랜더링하는 View 객체를 반환받는다.
7. `View 반환` : VIew 객체를 통해서 화면을 랜더링한다.







### 스프링 부트가 제공하는 핸들러 매핑, 어댑터

*HandlerMapping*

0. `RequestMappingHandlerMapping` : Annotation 기반 컨트롤러인 @RequestMapping 에 사용 (실무에서 99% 이거씀)
1. `BeanNameUrlHandlerMapping` : 빈의 이름으로 핸들러를 찾음.

*HandlerAdapter*

0. `RequestMappingHandlerAdapter` : Annotation 기반의 컨트롤러인 @RequestMapping에 사용 (마찬가지로 이거만 씀)
1. `HttpRequestHandlerAdapter` : HttpRequestHandler 에 사용
2. `SimpleControllerHandlerAdapter` : Controller 인터페이스 (현재는 사용되지 않는다.)







### View Resolver

*스프링 부트가 자동 등록하는 Resolver*

1. `BeanNameViewResolver` : 빈 이름으로 뷰를 찾아서 반환
2. `InternalResourceViewResolver` : JSP를 처리할 수 있는 뷰를 반환
   * 내부에서 forward()를 호출해서 JSP를 실행한다.







### Annotation 기반의 Spring MVC

`RequestMapping` 을 사용하는 컨트롤러, 앞에서 설명한 우선순위가 높은 핸들러 매핑(RequestMappiongHandlerMapping), 어댑터(ReqeustMappingHandlerAdapter) 가 모두 이것이다.



* `@Controller`

  * 내부에 `@Component` 를 가지고 있어서 컴포넌트 스캔할 때 자동으로 스프링 빈으로 등록된다.

  * 스프링 MVC에서 애노테이션 기반의 컨트롤러로 인식하게 된다.

* `@RequestMapping`

  * 해당 URL이 호출되면 이 에노테이션이 붙은 메서드가 호출된다.

  * 클래스 단에 적은 URL과 컨트롤러에 붙은 URL을 합쳐서 매핑한다.
  * `@GetMapping` , `@PostMapping` 을 사용해서 URL 매칭뿐 아니라 HTTP Method도 구분할 수 있다.

* 다양한 리턴값이 가능하다.
  * ModelAndView를 반환해도 되고 논리 위치를 반환해도 된다.





## Spring MVC 구조를 이해한 후 Annotation 기반의 Spring MVC를 사용하자.









