var store = [{
        "title": "[Spring] 객체지향 프로그래밍",
        "excerpt":"객체지향 프로그래밍 정의 Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior. 객체지향 프로그래밍은 기능과 로직보다는 데이터, 객체를 중심으로 소프트웨어를 설계하는 컴퓨터 프로그래밍...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/1/",
        "teaser": null
      },{
        "title": "[Spring] IoC, DI 컨테이너",
        "excerpt":"IoC (Inversion of Control) 정의 IoC란 객체의 생성, 생명주기의 관리까지 모든 객체에 대한 제어권이 바뀌었다는 것을 의미한다. 위 정의만 읽고 IoC가 무엇인지 와닿지 않을 수 있다. 아래 예시를 보고 이해해보자. 우리는 기존에 코드를 작성할 때, 각 객체에서 자신이 필요한 객체를 생성하고 실행하도록 했었다. ManagerController 클래스가 파일 입출력에 관련된 객체(FileInputView, FileOutputVIew)를...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/2/",
        "teaser": null
      },{
        "title": "[Spring] 스프링 컨테이너(1)",
        "excerpt":"스프링 컨테이너 스프링 컨테이너란? 스프링 컨테이너는 IoC 컨테이너이다. IoC 컨테이너에 대해 잘 모른다면 이전 포스트를 참고하자. 스프링 컨테이너를 지칭할 때, ApplicationContext, BeanFactory로 나누는데 일반적으로 BeanFactory를 직접 사용할 일이 없기 때문에 ApplicationContext를 스프링 컨테이너라고 생각하면 된다. 생성 과정 스프링 컨테이너 생성 스프링 빈들을 저장할 컨테이너를 먼저 생성한다. 빈은 이름과 실제 객체를...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/3/",
        "teaser": null
      },{
        "title": "[Spring] 스프링 컨테이너(2)",
        "excerpt":"싱글톤 컨테이너 스프링이 가장 많이 사용되는 분야는 웹, 앱 애플리케이션이다. 웹과 앱같은 경우 일반적으로 다수의 클라이언트가 동시에 서버에 요청을 하게 된다. 그런데 모든 요청마다 객체가 생성된다면 어떨까? 트래픽이 많아질수록 서버의 부담은 커지고 메모리 낭비가 심할 것이다. 때문에 스프링 컨테이너는 기본적으로 빈을 싱글톤으로 관리한다. (싱글톤에 대해 잘 모른다면 싱글톤 패턴을 참고하자)...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/4/",
        "teaser": null
      },{
        "title": "[Spring] 컴포넌트 스캔",
        "excerpt":"본 포스트는 Inflearn의 김영한님 강의를 바탕으로 작성했습니다. 컴포넌트 스캔 스프링은 설정 정보가 없어도 자동으로 스프링 빈을 등록하는 컴포넌트 스캔이라는 기능을 제공한다. 컴포넌트 스캔을 사용하면 @Component가 붙은 클래스를 찾아서 다 빈으로 등록한다. @Repository, @Service, @Configuration, @Controller를 까보면 안에 @Component를 가지고 있다. -&gt; 다 빈으로 등록된다.(Spring이 제공하는 기능) 컴포넌트 스캔을 사용하려면 @ComponentScan을...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/5/",
        "teaser": null
      },{
        "title": "[Spring] 의존관계 자동 주입",
        "excerpt":"본 포스트는 Inflearn의 김영한님 강의를 바탕으로 작성했습니다. 의존관계 주입 방식 생성자 주입 @Component public class OrderServiceImpl implements OrderService { private final MemberRepository memberRepository; private final DiscountPolicy discountPolicy; @Autowired public OrderServiceImpl(MemberRepository memberRepository, DiscountPolicy discountPolicy) { this.memberRepository = memberRepository; this.discountPolicy = discountPolicy; } } 생성자를 통해서 의존관계를 주입 받는 방식이다. 생성자 호출시점에...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/6/",
        "teaser": null
      },{
        "title": "[Spring] 빈 생명주기 콜백",
        "excerpt":"본 포스트는 Inflearn의 김영한님 강의를 바탕으로 작성했습니다. 빈 생명주기 콜백 콜백의 필요성 DB, network 커넥션들을 애플리케이션 시작 시점에 미리 연결해둬야 빠르게 사용할 수 있다. 이를 위해서는 객체의 초기화와 종료 작업이 필요하다. 스프링 빈의 라이프사이클 객체 생성 의존관계 주입 스프링 빈은 객체가 생성되고, 의존관계 주입이 다 끝나야 사용할 수 있다. 스프링은...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/7/",
        "teaser": null
      },{
        "title": "[Spring] 빈 스코프",
        "excerpt":"본 포스트는 Inflearn의 김영한님 강의를 바탕으로 작성했습니다. Bean Scope 스프링은 default로 빈을 싱글톤 스코프로 생성한다. 싱글톤 스코프로 생성된 빈은 스프링 컨테이너 시작 시점에 생성되어 스프링 컨테이너 종료까지 유지된다. 스프링은 싱글톤 스코프 말고도 프로토타입 스코프, 웹 스코프(request, session, application)를 지원한다. 하나씩 살펴보자 프로토타입 스코프 프로토타입 스코프를 잘 이해하기 위해 싱글톤 스코프부터...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/8/",
        "teaser": null
      },{
        "title": "[Spring] 스프링 웹 MVC",
        "excerpt":"본 포스트는 Inflearn의 김영한님 강의를 바탕으로 작성했습니다. 웹 서버와 웹 애플리케이션 서버 웹 서버 (Web server) 정적 리소스 제공 (html, css, js, 이미지, 영상) 웹 애플리케이션 서버 (WAS - Web Application Server) 웹 서버의 기능을 포함하고 프로그램 코드를 실행해서 애플리케이션 로직 수행 동적 html, HTTP API(JSON), 서블릿, JSP, 스프링 MVC...","categories": ["Spring"],
        "tags": ["Spring","MVC"],
        "url": "/spring/9/",
        "teaser": null
      },{
        "title": "[디자인패턴] 팩토리 패턴",
        "excerpt":"Factory Method Pattern이란? 팩토리 메서드 패턴에서는 객체를 생성하기 위한 인터페이스를 정의하고, 어떤 클래스의 인스턴스를 만들지는 서브 클래스에서 결정하게 하는 패턴이다. 팩토리 메서드는 객체를 생성, 반환하는 메서드이다. 팩토리 클래스는 하위 클래스에서 팩토리 메서드를 오버라이딩해서 객체를 반환하게 하여 상위 클래스와 하위 클래스가 분리되게 함으로써 결합을 느슨하게 한다. DIP를 활용한다. 팩토리 패턴은 왜...","categories": ["디자인패턴"],
        "tags": ["디자인패턴","CS"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/10/",
        "teaser": null
      },{
        "title": "[디자인패턴] 싱글톤 패턴",
        "excerpt":"싱글톤 패턴 The Singleton Design Pattern is used when there should only be one instance of a given class. It uses static, class methods and private constructors to strictly control creation of new instances of the class. -GoF design pattern 하나의 클래스가 오직 하나의 인스턴스만 생성하고 이를 공유하여 사용하는 패턴이다....","categories": ["디자인패턴"],
        "tags": ["디자인패턴","CS"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/11/",
        "teaser": null
      },{
        "title": "[Spring] 서블릿",
        "excerpt":"본 포스트는 Inflearn의 김영한님 강의를 바탕으로 작성했습니다. Servlet 서블릿은 TCP/IP connection, Socket connection, HTTP message parsing, HTTP response message 생성 등, 핵심 비즈니스 로직을 제외한 부분을 대신 해준다. 스프링 부트에서 servlet을 직접 등록해서 사용하려면 @ServletComponentScan 을 붙이면 된다. WAS의 요청 구조 스프링 부트가 톰켓(WAS)를 띄워준다. 톰켓은 서블릿 컨테이너에 서블릿을 등록하고...","categories": ["Spring"],
        "tags": ["Spring","MVC"],
        "url": "/spring/Servlet/",
        "teaser": null
      },{
        "title": "[디자인패턴] 전략 패턴",
        "excerpt":"Strategy pattern 객체의 행위를 바꾸고 싶은 경우 직접 수정하지 않고 전략이라고 부르는 캡슐화한 알고리즘을 컨텍스트 안에서 바꿔주면서 상호 교체가 가능하게 만드는 패턴이다. 특정 컨텍스트에서 알고리즘을 별도로 분리하는 설계 방법을 의미한다. 쉽게 말해서 특정 기능을 수행하는데 다양한 알고리즘이 적용될 수 있을 때, 알고리즘을 별도로 분리하는 설계 방법을 의미하는 것이다. Strategy pattern의...","categories": ["디자인패턴"],
        "tags": ["디자인패턴","CS"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/Strategy/",
        "teaser": null
      },{
        "title": "[디자인패턴] 옵저버 패턴",
        "excerpt":"Observer Pattern 옵저버 패턴이란 객체의 상태 변화를 관찰하는 옵저버들의 목록을 객체에 등록하여 객체의 상태 변화가 있을 때마다 객체에 등록된 옵저버들에게 알려주는 디자인 패턴이다. 쉽게 말해서 객체의 상태 변화가 생길 때, 이와 관련된 객체들에게 알림을 보내는 것이다. 옵저버 패턴의 장단점 장점 실시간으로 한 객체의 변경사항을 다른 객체에 전파할 수 이다. 옵저버...","categories": ["디자인패턴"],
        "tags": ["디자인패턴","CS"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/Observer/",
        "teaser": null
      },{
        "title": "[디자인패턴] 프록시 패턴",
        "excerpt":"Proxy Pattern 프록시 패턴은 대상 객체에 접근하기 전 그 접근에 대한 흐름을 가로채 대상 객체 앞단의 인터페이스 역할을 하는 디자인 패턴이다. 대상 클래스가 민감한 정보를 가지고 있거나 인스턴스화 하기에는 무겁거나, 추가 기능을 넣고 싶은데 원본 객체를 수정할 수 없는 상황일 때 사용한다. 프록시 패턴의 효과 보안 : 프록시는 클라이언트가 작업을...","categories": ["디자인패턴"],
        "tags": ["디자인패턴","CS"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/Proxy/",
        "teaser": null
      },{
        "title": "[Spring] MVC 구조",
        "excerpt":"본 포스트는 Inflearn의 김영한님 강의를 바탕으로 작성했습니다. 스프링 MVC 구조 스프링 MVC는 FrontController 패턴으로 구현되어 있다. Dispatcher Servlet(FrontController)에서 공통되는 로직을 처리하고 요청으로 들어온 URL에 해당하는 컨트롤러를 호출한다. 동작 순서 핸들러 조회 : 핸들러 매핑 map을 뒤져서 요청한 URL에 해당하는 컨트롤러가 있는지 확인한다. 핸들러 어댑터 조회 : 해당 핸들러를 실행할 수...","categories": ["Spring"],
        "tags": ["Spring","MVC"],
        "url": "/spring/MVC_Structure/",
        "teaser": null
      },{
        "title": "[Spring] MVC 기능",
        "excerpt":"본 포스트는 Inflearn의 김영한님 강의를 바탕으로 작성했습니다. 요청매핑 @RequestMapping @RequestMapping은 파라미터로 URL을 넣을 수 있는데 해당 URL로 호출이 오면 메서드가 실행된다. 여러개의 URL을 배열 형태로 받을 수도 있다. @RequestMapping은 HTTP 메서드를 지정하지 않으면 HTTP 메서드 종류에 상관없이 무조건 호출된다. @GetMapping, @PostMapping, @PatchMapping, @DeleteMapping , @PutMapping 을 사용하면 HTTP 메서드에 따라...","categories": ["Spring"],
        "tags": ["Spring","MVC"],
        "url": "/spring/Spring_MVC_function/",
        "teaser": null
      },{
        "title": "[디자인패턴] 반복자 패턴",
        "excerpt":"Iterator Pattern 이터레이터 패턴은 반복자를 사용해서 컬렉션과 같은 데이터 집합의 각 요소들을 순차적으로 접근할 수 있도록 해주는 디자인패턴이다. 자료형의 종류와 구조에 상관없이 하나의 인터페이스로 순회가 가능하다는 특징이 있다. Aggregate : ConcreateAggreate 객체를 반환하는 인터페이스를 제공 iterator() : ConcreateIterator 객체를 만드는 팩토리 메서드 ConcreateAggregate : 데이터의 집합체 iterator : 집합체 안의...","categories": ["디자인패턴"],
        "tags": ["디자인패턴","CS"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/Iterator/",
        "teaser": null
      },{
        "title": "[디자인패턴] 노출모듈 패턴",
        "excerpt":"Revealing Module Pattern 즉시 실행 함수를 통해 private, public 과 같은 접근 제어자를 만든느 패턴이다. 자바 스크립트에서는 접근 제어자가 존재하지 않고 전역 범위에서 스크립트가 실행된다. 때문에 접근 제어자를 사용하고 싶으면 노출모듈 패턴을 통해서 public, private 접근 제어자를 만들어서 사용해야 한다. 그렇다면 즉시 실행 함수란 무엇일까? (function () { console.log(\"TEST\"); })();...","categories": ["디자인패턴"],
        "tags": ["디자인패턴","CS"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/RevealingModule/",
        "teaser": null
      },{
        "title": "[디자인패턴] MVC, MVP, MVVM 패턴",
        "excerpt":"MVC Pattern MVC 패턴이란 Model, View, Controller 로 이루어진 디자인패턴이다. M, V, C 역할을 분리해서 코드를 관리하기 때문에 유지보수가 편해지고 개발 효율성이 높아진다. MVC 구조 용어 Model : 애플리케이션에서 사용되는 데이터와 이 데이터를 처리하는 부분이다. View : 사용자에게 보여지는 UI 부분이다. Controller : 사용자의 입력을 받고 처리하는 부분이다. 동작 사용자의...","categories": ["디자인패턴"],
        "tags": ["디자인패턴","CS"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/dpMVC/",
        "teaser": null
      },{
        "title": "[Java] Intro",
        "excerpt":"Java 정리 최근 Java를 쓰면서 내가 정말 Java라는 언어를 잘 알고 있나? 라는 의문이 들었다. 프로그래밍을 하면서 자신이 쓰는 언어에 대해서 제대로 이해하는 것은 정말 중요하다. 이참에 한 번 제대로 정리하고 넘어가자. 선택한 책 공부할 책은 Java의 정석 으로 정했다. 취업하기 전에 정리하는 느낌으로 좋다는 평이 많아서 선택했다. Java 공부...","categories": ["Java"],
        "tags": ["Java"],
        "url": "/java/javaIntro/",
        "teaser": null
      },{
        "title": "[Java] JVM",
        "excerpt":"JVM 이란? JVM(Java Virtual Machine) 은 자바와 운영체제 사이에서 중개자 역할을 수행하며 자바가 OS에 의존하지 않고 프로그램을 실행할 수 있게 도와준다. 또한 가비지 컬렉터(GC)를 사용한 메모리 관리도 자동으로 해주며, 다른 하드웨어와 다르게 레지스터 기반이 아닌 스택 기반으로 동작한다. 특징 자바 컴파일러(javac) 에 의해서 자바 소스 파일(.java)가 바이트 코드(.class) 로 컴파일된다....","categories": ["Java"],
        "tags": ["Java","JVM"],
        "url": "/java/java_JVM1/",
        "teaser": null
      },{
        "title": "[Spring] 예외 처리",
        "excerpt":"본 포스트는 Inflearn의 김영한님 강의를 바탕으로 작성했습니다. Exception Handle 스프링 부트는 기본 설정으로 예외가 WAS에 전달되거나 Response.sendError() 가 호출되면 /error 를 호출한다. 그러면 BasicErrorController 가 제공하는 기본 정보들을 활용해서 오류 API를 생성해준다. 하지만 API 마다, 각각의 컨트롤러나 예외마다 서로 다른 응답 결과를 출력해야 할 수 있다. 때문에 API 오류 처리는...","categories": ["Spring"],
        "tags": ["Spring","MVC"],
        "url": "/spring/exceptionHandle/",
        "teaser": null
      },{
        "title": "[알고리즘] Union find",
        "excerpt":"오늘은 Union-Find 알고리즘에 대해서 정리해보겠다. Union find algorithm 유니온 파인드 알고리즘은 상호 배타적 집합, Disjoin-set(서로소 집합) 이라고도 부른다. 여러 노드가 존재할 때, 어떤 두 개의 노드를 같은 집합으로 묶어 주고, 어떤 두 노드가 같은 집하에 있는지 확인하는 알고리즘이다. Union 연산 서로 연결된 두 노드 A, B를 선택 A의 루트 노드와...","categories": ["알고리즘"],
        "tags": ["알고리즘","Union find","자료구조"],
        "url": "/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/unionFind/",
        "teaser": null
      },{
        "title": "[JPA] ORM 이란?",
        "excerpt":"ORM 정의 ORM (Object-relational mapping)은 객체와 데이터베이스의 관계를 매핑해 주는 도구이다. 객체와 관계형 데이터베이스 사이의 패러다임의 불일치를 해소해주고 객체는 객체대로 설계하고 관계형 데이터베이스는 관계형 데이터베이스대로 설계할 수 있게 도와준다. ORM은 객체, 데이터베이스 기술 중간에서 이들을 매핑하는 역할을 수행한다. 필요성 많은 애플리케이션은 객체 지향 언어를 사용해서 작성된다.그리고 애플리케이션에 필요한 데이터를 저장하는...","categories": ["JPA"],
        "tags": ["ORM","JPA","DB"],
        "url": "/jpa/JPA1/",
        "teaser": null
      },{
        "title": "[JPA] 영속성 컨텍스트",
        "excerpt":"본 포스트는 Inflearn의 김영한님 강의를 바탕으로 작성했습니다. 영속성 컨텍스트 영속성 컨텍스트란 엔티티를 영구 저장하는 환경이라는 뜻이다. 애플리케이션과 DB 사이에서 객체를 보관하는 가상의 DB역할을 수행한다. EntityManager를 통해서 엔티티를 저장하거나 조회를 하면 EntityManager는 영속성 컨텍스트에 엔티티를 저장한다. 엔티티의 생명주기 엔티티의 생명주기는 크게 비영속, 영속, 준영속, 삭제가 있다. 하나씩 알아보자 비영속(new/transient) 영속성 컨텍스트와...","categories": ["JPA"],
        "tags": ["Spring","JPA","DB"],
        "url": "/jpa/JPA2/",
        "teaser": null
      },{
        "title": "[JPA] 기본키 매핑 전략",
        "excerpt":"본 포스트는 Inflearn의 김영한님 강의를 바탕으로 작성했습니다. 기본 키 매핑 전략 IDENTITY : 데이터베이스에 위임하는 전략 MYSQL에서 사용됨. AUTO_INCREMENT는 데이터베이스에 INSERT SQL을 실행한 이후에 ID값을 알 수 있기 때문에 em.persist() 시점에 바로 INSERT SQL을 실행하고 ID를 가져온다. @Entity public class Item { @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id; }...","categories": ["JPA"],
        "tags": ["Spring","JPA","DB"],
        "url": "/jpa/JPA3/",
        "teaser": null
      },{
        "title": "[JPA] 연관관계 매핑(1)",
        "excerpt":"본 포스트는 Inflearn의 김영한님 강의를 바탕으로 작성했습니다. 객체와 테이블의 패러다임 불일치 먼저 객체와 테이블 사이의 간극을 이해할 필요가 있다. 객체는 참조 를 사용해서 연관된 객체를 찾는다. 그런데 테이블은 외래키 조인을 통해서 연관된 테이블을 찾는다. 때문에 객체를 테이블에 맞춰서 설계를 하면 객체간의 협력 관계를 만들 수 없다. Member 와 Team 사이의...","categories": ["JPA"],
        "tags": ["Spring","JPA","DB"],
        "url": "/jpa/JPA4/",
        "teaser": null
      },{
        "title": "[JPA] 연관관계 매핑(2)",
        "excerpt":"본 포스트는 Inflearn의 김영한님 강의를 바탕으로 작성했습니다. 오늘은 JPA에서 상속관계를 매핑하는 방법에 대해서 알아보자! 상속관계 매핑 관계형 데이터베이스는 상속 관계에 대한 매핑을 따로 지원하지 않는다. 슈퍼타입, 서브타입 관계라는 모델링 기법을 통해서 상속관계를 표현할 수 있다. 슈퍼타입, 서브타입 논리 모델을 실제 물리 모델로 구현하는 방법은 크게 3가지가 있다. 이 중에서 구현...","categories": ["JPA"],
        "tags": ["Spring","JPA","DB"],
        "url": "/jpa/JPA5/",
        "teaser": null
      },{
        "title": "[JPA] 데이터 JPA(1)",
        "excerpt":"본 포스트는 Inflearn의 김영한님 강의를 바탕으로 작성했습니다. @Repository 기능 @Repository는 2가지 기능을 제공한다. 첫번째는 이 Annotation이 붙은 클래스를 스프링 빈으로 등록한다. 두번째는 JPA 예외를 스프링 예외로 변환해준다. 데이터를 직접 접근하는 Repository 계층 구현 기술에 Service 계층이 직접 의존하는 것은 좋은 설계라고 할 수 없다. 이는 예외 처리에도 동일하게 적용된다. @Repository를...","categories": ["JPA"],
        "tags": ["Spring","JPA","Data JPA"],
        "url": "/jpa/sj1/",
        "teaser": null
      },{
        "title": "[JPA] 데이터 JPA(2)",
        "excerpt":"본 포스트는 Inflearn의 김영한님 강의를 바탕으로 작성했습니다. Paging 이슈 JPA가 없던 시절에 Paging 처리를 하는 것은 굉장히 귀찮은 일이었다. JPA가 등장하면서 Paging을 쉽게 처리할 수 있게 되었다. Spring data JPA를 사용하면 페이지 계산과 같이 반복적이고 실수하기 쉬운 것을 추상화해서 사용하기 쉽게 제공해준다. 먼저 순수 JPA를 사용한 Paging 처리를 보고 다음으로...","categories": ["JPA"],
        "tags": ["Spring","JPA","Data JPA"],
        "url": "/jpa/sj2/",
        "teaser": null
      },{
        "title": "[JAVA] Concurrency Issue & Thread Local",
        "excerpt":"Concurrency Issue 동시성 문제란 동일한 자원에 대해서 여러 스레드가 동시에 접근해서 값을 바꾸면서 발생하는 문제를 뜻한다. 단순히 읽기를 할때는 문제가 발생하지 않지만 값을 바꾸게 되면 문제가 발생할 수 있다. 예시를 보고 이해해보자. 위 그림에서의 FieldService는 Spring bean으로 등록되어 있어서 싱글톤으로 관리되는 상태이다. 그런데 Thread-A 가 FieldService의 맴버 변수 nameStore에 접근해서...","categories": ["Java","Spring"],
        "tags": ["Java","Spring"],
        "url": "/java/spring/java3/",
        "teaser": null
      },{
        "title": "[알고리즘] 비트 마스킹",
        "excerpt":"비트 마스크란? 컴퓨터는 내부적으로 모든 연산을 이진수로 표현하고 처리한다. 이런 특성을 이용해서 정수의 이진수 표현을 자료구조로 쓰는 기법을 비트 마스크 라고 한다. 비트 연산자 파이썬의 기본 비트 연산자를 먼저 살펴보자. AND, OR, XOR AND 연산 (&amp;) : 두 비트가 모두 1일 때, 1을 반환한다. OR 연산 (l) : 두 비트가...","categories": ["알고리즘"],
        "tags": ["비트 마스킹","알고리즘","자료구조"],
        "url": "/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/33/",
        "teaser": null
      },{
        "title": "[DB] 데이터 모델링",
        "excerpt":"데이터 모델링 데이터 모델링의 단계 개념적 모델링 고객의 비지니스 프로세스를 분석하고 업무 전체에 대해서 데이터 모델링을 수행 복잡하게 표현하지 않고, 중요한 부분을 위주로 모델링하는 단계 업무적 관점에서 모델링하며, 기술적 용어는 가급적 사용 X 엔티티와 속성을 도출하고 개념적 ERD를 작성한다. 논리적 모델링 개념적 모델링을 논리적 모델링으로 변환하는 과정 식별자를 도출하고 필요한...","categories": ["데이터베이스"],
        "tags": ["데이터베이스","SQLD"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4/34/",
        "teaser": null
      },{
        "title": "[DB] 데이터 모델 & 성능",
        "excerpt":"데이터 모델과 성능 이상현상 정규화를 살펴보기 전에 이상현상(Anomaly)에 대해서 알아보자 삽입 이상 불필요한 데이터를 추가해야지만, 삽입이 가능한 상황 갱신 이상 일부만 변경하여, 데이터가 불일치 하는 모순이 발생하는 상황 삭제 이상 튜플 삭제로 인해 꼭 필요한 데이터까지 함께 삭제되는 상황 정규화 데이터의 일관성, 최소한의 중복, 최대한의 데이터 유연성을 위한 방법으로, 데이터를...","categories": ["데이터베이스"],
        "tags": ["데이터베이스","SQLD"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4/35/",
        "teaser": null
      },{
        "title": "[Network] 컴퓨터 네트워크와 인터넷",
        "excerpt":"Internet 이란? 인터넷은 컴퓨터로 연결하여 TCP/IP 라는 통신 프로토콜을 이용해 정보를 주고 받는 컴퓨터 네트워크를 의미한다. Date를 전달하는 장치들이 이루는 거대한 network 망이다 end system(host) 에 통신 서비스를 제공하는 존재이다. 구성 여러 형태의 sub-network로 구성된다. End system : 노트북, 휴대폰, 컴퓨터 등 네트워크를 이용하는 말단 부분 Access Network : end...","categories": ["Network"],
        "tags": ["Network"],
        "url": "/network/36/",
        "teaser": null
      },{
        "title": "[Network] Layer5",
        "excerpt":"application layer의 특징 protocol stack의 가장 위에 존재한다. 사용자가 직접 접하는 protocol 이다. socket을 통해서 transport layer 와 통신한다. socket : 프로세스와 네트워크 사이의 인터페이스이다. (IP + Port로 식별) application layer가 존재하는 end system 끼리 소통한다. transport layer에서 application layer에 제공하는 서비스 신뢰적 데이터 전송 보장된 데이터 전송 서비스를 제공하는...","categories": ["Network"],
        "tags": ["Network"],
        "url": "/network/37/",
        "teaser": null
      },{
        "title": "[Network] Layer3",
        "excerpt":"네트워크 계층 역할 네트워크 상에서 end-to-end로 패킷을 전달하는 역할을 한다. 포워딩 (Forwarding) 입력 포트로 들어오는 패킷을 다른 출력 포트로 전송하는 동작을 수행한다. 포워딩 테이블을 기반으로 동작한다. Data plane에서 수행된다. 라우팅 (Routing) 경로를 파악하기 위한 제어 동작을 한다. 라우팅 알고리즘을 통해서 포워딩 테이블을 생성한다. Control plane에서 수행된다. 데이터, 제어 평면 데이터...","categories": ["Network"],
        "tags": ["Network"],
        "url": "/network/38/",
        "teaser": null
      },{
        "title": "[Network] Layer4",
        "excerpt":"트랜스포트 계층 역할 각기 다른 호스트에서 동작하는 프로세스 사이의 논리적 통신을 제공한다. 네트워크 계층 프로토콜은 호스트 사이의 논리적 통신을 제공한다. 특징 IP 및 Port 번호로 식별한다. IP를 통해서 호스트를, Port를 통해서 프로세스를 찾아간다. 종단 시스템(end system, host)에 존재한다. Network core, Access network에는 트랜스포트 프로토콜이 존재하지 않는다. IP 계층에 대한 다양한...","categories": ["Network"],
        "tags": ["Network"],
        "url": "/network/39/",
        "teaser": null
      },{
        "title": "[클린코드] 일급 컬렉션",
        "excerpt":"우테코 1주차 과제를 리팩토링하면서 일급 컬렉션이라는 개념에 대해서 알게 됐다. 오늘은 일급 컬렉션이 무엇인지, 그리고 언제 사용하면 유용한지에 대해서 소개하겠다. 일급 컬렉션이란 무엇일까? 규칙 8: 일급 콜렉션 사용 콜렉션을 포함한 클래스는 반드시 다른 멤버 변수가 없어야 한다. 각 콜렉션은 그 자체로 포장돼 있으므로 이제 콜렉션과 관련된 동작은 근거지가 마련된셈이다. 필터가...","categories": ["클린코드"],
        "tags": ["클린코드","TDD","우테코"],
        "url": "/%ED%81%B4%EB%A6%B0%EC%BD%94%EB%93%9C/40/",
        "teaser": null
      },{
        "title": "[git] Merge, Rebase, Cheery-pick",
        "excerpt":"이전까지 프로젝트를 하면서 git을 계속 사용했지만 내부 동작 방식을 제대로 이해하지 못한채로 사용했었다. 내부 동작 방식을 몰랐기 때문에 예측할 수 없는 상황이 많이 발생했었다. 예를들어 merge를 했는데 언제는 commit이 생기고 언제는 안생기는 등… 이번 기회에 git에 대해서 정리하고자 한다. merge merge란 두 브랜치를 합치는 기능을 의미한다. 일반적으로 많이 사용되는 병합...","categories": ["git"],
        "tags": ["프로젝트 관리","git","우테코"],
        "url": "/git/41/",
        "teaser": null
      },{
        "title": "[프리코스] 숫자 야구 리뷰",
        "excerpt":"조금 늦었지만 지난주에 수행했던 숫자 야구 미션에 대해서 리뷰해보고자 한다. 숫자 야구 게임이란 1~9까지의 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다. 컴퓨터가 생성한 3자리 숫자와 사용자가 입력한 3자리 수의 각 자리수를 비교한다. 만약 자리수, 숫자가 모두 같으면 스트라이크이고 자리수는 다르지만 숫자가 같으면 볼이다. 자리수, 숫자 같은게 아무것도 없으면 낫싱이다....","categories": ["우테코"],
        "tags": ["우테코","프리코스"],
        "url": "/%EC%9A%B0%ED%85%8C%EC%BD%94/42/",
        "teaser": null
      },{
        "title": "[테스트] 단위 테스트",
        "excerpt":"동기 이번 우테코 2주차 미션부터 메서드를 테스트하는 요구사항이 추가됐다. 그래서 이번에 테스트에 대해서 공부하고 정리하고자 이 글을 작성하게 됐다. 테스트에는 크게 단위 테스트, 통합 테스트가 있는데 오늘은 단위 테스트가 무엇인지, 그리고 어떻게 사용하는지에 중점을 맞추겠다. 단위 테스트 단위 테스트는 응용 프로그램에서 테스트 가능한 가장 작은 소프트웨어를 실행하여 예상대로 동작하는지 확인하는...","categories": ["테스트"],
        "tags": ["우테코","프리코스","테스트","Junit5"],
        "url": "/%ED%85%8C%EC%8A%A4%ED%8A%B8/43/",
        "teaser": null
      },{
        "title": "[Network] 보안",
        "excerpt":"오늘은 지난 시간에 이어서 네트워크 보안에 대해서 정리하겠다. 본 게시글은 컴퓨터 네트워킹 하향식 접근 (제8판)을 토대로 작성됐다. 안전한 통신 기밀성 송신자와 지정된 수신자만이 전송되는 메시지의 내용을 이해할 수 있어야 한다. 메시지를 어떠한 방식으로든 암호화해야 한다. 메시지 무결성 전송중에 메시지의 내용이 변하지 않아야 한다. 종단점 인증 송신자와 수신자는 상대방이 실제로 누구인지...","categories": ["Network"],
        "tags": ["Netowrk"],
        "url": "/network/44/",
        "teaser": null
      },{
        "title": "[테스트] 다양한 테스트 방법",
        "excerpt":"동기 2주차 미션 피드백을 읽으면서 유용한 테스트 방법이 있어서 소개하고자 한다. 바로 ParameterizedTest이다. 바로 사용 방법을 알아보자! ParameterizedTest @ParameterizedTest를 사용하면 여러 개의 파라미터에 대한 테스트를 하나에 테스트 메소드로 처리할 수 있다. @Test만을 사용했을 때와 @ParameterizedTest를 사용했을 때의 차이점을 코드로 확인해보자! 기존의 테스트 ParameterizedTest를 사용하지 않으면 테스트하고 싶은 매개변수가 있을 때마다...","categories": ["테스트"],
        "tags": ["Junit5","우테코"],
        "url": "/%ED%85%8C%EC%8A%A4%ED%8A%B8/45/",
        "teaser": null
      },{
        "title": "[DB] 이상현상과 정규화",
        "excerpt":"이상현상 (Anomaly) 삽입이상 불필요한 데이터를 추가해야지만 삽입이 가능한 상황 갱신이상 같아야 하는 정보가 복수 개의 행에 표현될 경우, 데이터를 수정할 때 일부 정보만 갱신되고 일부는 변하지 않아 데이터 오류가 발생하는 현상 삭제이상 의도하지 않은 데이터까지 삭제해야만 지우고자 하는 데이터를 지울 수 있는 현상 → 이러한 이상 현상들을 없애기 위해서 정규화를...","categories": ["데이터베이스"],
        "tags": ["정규화","DB"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4/46/",
        "teaser": null
      },{
        "title": "[DB] 트랜잭션",
        "excerpt":"트랜잭션 정의 데이터베이스에서 하나의 논리적 기능을 수행하기 위한 작업의 단위를 의미한다. 여러 쿼리를 하나로 묶는 단위를 말한다. 속성 원자성(Atomicity) 원자성은 트랜잭션과 관련된 일이 모두 수행되었거나 되지 않았거나를 보장하는 특징이다. All or Nothing 중간에 취소된 경우에 완전히 처음 상태로 돌아가는 것을 보장한다. Commit, Rollback Commit : 트랜잭션 단위로 수행되며 변경된 모든...","categories": ["데이터베이스"],
        "tags": ["트랜잭션","DB"],
        "url": "/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4/47/",
        "teaser": null
      },{
        "title": "[DevOps] CI/CD & 무중단 배포",
        "excerpt":"DevOps 정의 Development + Operation 개발과 운영을 결합시켜 만든 개발 방법론을 의미한다. 소프트웨어 개발과 운영을 통합하여 효율성, 협력, 속도, 안정성을 개선하는 개발 및 운영 방법론이다. 장점 속도 애플리케이션 개발 단계를 자동화하여 애플리케이션을 더 짧은 주기로 고객에게 제공할 수 있다. 신속한 제공 릴리스 빈도와 속도를 개선하여 제품을 더 빠르게 개선할 수...","categories": ["DevOps"],
        "tags": ["DevOps","CI/CD","리버스 프록시","무중단 배포"],
        "url": "/devops/48/",
        "teaser": null
      },{
        "title": "[디자인패턴] 템플릿 메소드 패턴",
        "excerpt":"템플릿 메소드 패턴 정의 Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm’s structure. -GoF design pattern 템플릿 메소드 패턴은 알고리즘의 뼈대를 정의하고 서브 클래스마다 세부 동작 사항을 다르게 구현하는 패턴을...","categories": ["디자인패턴"],
        "tags": ["디자인패턴"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/49/",
        "teaser": null
      },{
        "title": "[디자인패턴] 컴포짓 패턴",
        "excerpt":"컴포짓 패턴 정의 Composite design pattern comes under Structural Patterns is one of the most important and usable part of design pattern. Developers, in his daily life uses this pattern in somehow but he doesn’t know that its really a Composite Design Pattern. -GoF design pattern 컴포짓 패턴은 클라이언트로 하여금 각 객체와 객체의...","categories": ["디자인패턴"],
        "tags": ["디자인패턴"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/50/",
        "teaser": null
      },{
        "title": "[디자인패턴] 어댑터 패턴",
        "excerpt":"어댑터 패턴 정의 Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn’t otherwise because of incompatible interfaces. -GoF design pattern 어댑터 패턴(Adapter Pattern)은 클래스의 인터페이스를 클라이언트가 원하는 형태의 또 다른 인터페이스로 변환해준다. 구조 Client 클라이언트 입장에서는 새로운 기능을 사용하기 위해 Adaptee의...","categories": ["디자인패턴"],
        "tags": ["디자인패턴"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/51/",
        "teaser": null
      },{
        "title": "[디자인패턴] 퍼사드 패턴",
        "excerpt":"퍼사드 패턴 정의 Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use. Wrap a complicated subsystem with a simpler interface. -GoF design pattern 퍼사드 패턴은 서브 시스템에 있는 여러 개의 인터페이스를 통합하여 하나의 인터페이스를 제공한다....","categories": ["디자인패턴"],
        "tags": ["디자인패턴"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/52/",
        "teaser": null
      },{
        "title": "[디자인패턴] 상태 패턴",
        "excerpt":"상태 패턴 정의 Allow an object to alter its behavior when its internal state changes. The object will appear to change its class. -GoF design pattern 객체 내부의 상태가 바뀔 때, 객체의 동작을 변경할 수 있도록 한다. 구조 Context 여러 상태가 존재하는 시스템을 말한다. 시스템은 상태를 나타내는 State를 가지고 있으며...","categories": ["디자인패턴"],
        "tags": ["디자인패턴"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/53/",
        "teaser": null
      },{
        "title": "[디자인패턴] 커맨드 패턴",
        "excerpt":"커맨드 패턴 정의 Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations. -GoF design pattern 요구사항(요청, 명령)을 객체로 캡슐화하여 서로 다른 요구사항을 가진 클라이언트를 매개변수화시킬 수 있고 요구사항을 큐에 넣어 로그를 남기거나 작업을 취소할 수 있는 기능을...","categories": ["디자인패턴"],
        "tags": ["디자인패턴"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/54/",
        "teaser": null
      }]
