var store = [{
        "title": "[Spring] 객체 지향 설계와 스프링",
        "excerpt":"객체 지향 설계와 스프링 스프링의 핵심 좋은 객체 지향 application을 만들 수 있게 도와주는 프레임워크 SOLID SRP (Single responsiblity principle) 한 클래스는 하나의 책임만 가져야 한다. 변경파급이 낮게 설계하는 것이 좋다. OCP (Open Closed Principle) 확장에는 열려 있고 변경에는 닫혀 있게 설계해야 한다. 기능을 추가하거나 변경할 때, 클라이언트 코드의 변경...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring1/",
        "teaser": null
      },{
        "title": "[Spring] 스프링 핵심 원리 이해",
        "excerpt":"스프링의 핵심 원리 아래 코드의 문제점은 무엇일까? public class OrderServiceImpl implements OrderService { private final MemberRepository memberRepository = new MemoryMemberRepository(); private final DiscountPolicy discountPolicy = new FixDiscountPolicy(); } 클라이언트인 OrderServiceImpl이 구현체를 직접 의존하고 있다. (DIP 위반) 만약 저장소를 DB로 바꾸려고 하거나, 할인 정책을 바꾸려고 한다면 클라이언트 코드를 수정해야 한다. (OCP...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring2/",
        "teaser": null
      },{
        "title": "[Spring] 스프링 컨테이너와 스프링 빈",
        "excerpt":"스프링 컨테이너 생성 과정 스프링 컨테이너 생성 new AnnotationConfigApplicationContext(AppConfig.class) 스프링 컨테이너를 생성할 때는 구성 정보를 지정해줘야 한다. (AppConfig) 스프링 빈 등록 설정 정보 클래스 (AppConfig)를 통해서 스프링 빈을 등록한다. 빈 이름은 default로 메서드 이름이 사용된다. (직접 지정할 수도 있다.) 빈 이름은 항상 다른 이름이 부여되야 한다. 같은 이름이 들어오게 되면...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring3/",
        "teaser": null
      },{
        "title": "[Spring] 싱글톤 컨테이너",
        "excerpt":"싱글톤 패턴을 사용하는 이유 여러 클라이언트가 요청할 때마다 새로운 객체를 생성하는 것은 메모리 낭비가 심하다. 객체를 하나만 생성하고 이를 공유하도록 설계하자. -&gt; 싱글톤 패턴 싱글톤 패턴 클래스의 인스턴스를 딱 1개만 생성되도록 보장하는 디자인 패턴이다. public class SingletonService { private static final SingletonService instance = new SingletonService(); public static SingletonService getInstance()...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring4/",
        "teaser": null
      },{
        "title": "[Spring] 컴포넌트 스캔",
        "excerpt":"컴포넌트 스캔 스프링은 설정 정보가 없어도 자동으로 스프링 빈을 등록하는 컴포넌트 스캔이라는 기능을 제공한다. 컴포넌트 스캔을 사용하면 @Component가 붙은 클래스를 찾아서 다 빈으로 등록한다. @Repository, @Service, @Configuration, @Controller를 까보면 안에 @Component를 가지고 있다. -&gt; 다 빈으로 등록된다.(Spring이 제공하는 기능) 컴포넌트 스캔을 사용하려면 @ComponentScan을 설정 정보에 붙여줘야 한다. (@SpringBootApplication 안에 @ComponentScan이...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring5/",
        "teaser": null
      },{
        "title": "[Spring] 의존관계 자동 주입",
        "excerpt":"의존관계 주입 방식 생성자 주입 @Component public class OrderServiceImpl implements OrderService { private final MemberRepository memberRepository; private final DiscountPolicy discountPolicy; @Autowired public OrderServiceImpl(MemberRepository memberRepository, DiscountPolicy discountPolicy) { this.memberRepository = memberRepository; this.discountPolicy = discountPolicy; } } 생성자를 통해서 의존관계를 주입 받는 방식이다. 생성자 호출시점에 딱 1번만 호출된다. 변경이 불가능하지만 대부분의 경우...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring6/",
        "teaser": null
      },{
        "title": "[Spring] 빈 생명주기 콜백",
        "excerpt":"빈 생명주기 콜백 콜백의 필요성 DB, network 커넥션들을 애플리케이션 시작 시점에 미리 연결해둬야 빠르게 사용할 수 있다. 이를 위해서는 객체의 초기화와 종료 작업이 필요하다. 스프링 빈의 라이프사이클 객체 생성 의존관계 주입 스프링 빈은 객체가 생성되고, 의존관계 주입이 다 끝나야 사용할 수 있다. 스프링은 의존관계 주입이 완료되면 스프링 빈에게 콜백 메서드를...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring7/",
        "teaser": null
      },{
        "title": "[Spring] 빈 스코프",
        "excerpt":"Bean Scope 스프링은 default로 빈을 싱글톤 스코프로 생성한다. 싱글톤 스코프로 생성된 빈은 스프링 컨테이너 시작 시점에 생성되어 스프링 컨테이너 종료까지 유지된다. 스프링은 싱글톤 스코프 말고도 프로토타입 스코프, 웹 스코프(request, session, application)를 지원한다. 하나씩 살펴보자 프로토타입 스코프 프로토타입 스코프를 잘 이해하기 위해 싱글톤 스코프부터 복습해보자. 싱글톤 스코프로 생성된 빈은 조회를 하면...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring8/",
        "teaser": null
      },{
        "title": "[Spring] 스프링 웹 MVC",
        "excerpt":"웹 서버와 웹 애플리케이션 서버 웹 서버 (Web server) 정적 리소스 제공 (html, css, js, 이미지, 영상) 웹 애플리케이션 서버 (WAS - Web Application Server) 웹 서버의 기능을 포함하고 프로그램 코드를 실행해서 애플리케이션 로직 수행 동적 html, HTTP API(JSON), 서블릿, JSP, 스프링 MVC 등 이 둘은 경계가 모호하다. 웹 시스템의...","categories": ["Spring"],
        "tags": ["Spring","MVC"],
        "url": "/spring/mvc1/",
        "teaser": null
      },{
        "title": "[디자인패턴] 팩토리 패턴",
        "excerpt":"Factory Method Pattern이란? 팩토리 메서드 패턴에서는 객체를 생성하기 위한 인터페이스를 정의하고, 어떤 클래스의 인스턴스를 만들지는 서브 클래스에서 결정하게 하는 패턴이다. 팩토리 메서드는 객체를 생성, 반환하는 메서드이다. 팩토리 클래스는 하위 클래스에서 팩토리 메서드를 오버라이딩해서 객체를 반환하게 하여 상위 클래스와 하위 클래스가 분리되게 함으로써 결합을 느슨하게 한다. DIP를 활용한다. 팩토리 패턴은 왜...","categories": ["디자인패턴"],
        "tags": ["디자인패턴","CS"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/Factory/",
        "teaser": null
      },{
        "title": "[디자인패턴] 싱글톤 패턴",
        "excerpt":"디자인패턴 디자인 패턴이란 프로그램을 설계할 때 발생했던 문제점들을 객체 간의 상호 관계 등을 이용해서 해결할 수 있도록 하나의 규약 형태로 만들어 놓은 것을 뜻한다. 싱글톤 패턴이란? 싱글톤 패턴이란 하나의 클래스에 대해 오직 하나의 인스턴스만 가지고 이를 공유하는 패턴이다. 데이터베이스 연결 모듈에 많이 사용된다. 장점 인스턴스를 한 번 생성하면 더 이상...","categories": ["디자인패턴"],
        "tags": ["디자인패턴","CS"],
        "url": "/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/Singleton/",
        "teaser": null
      },{
        "title": "[Spring] 서블릿",
        "excerpt":"Servlet 서블릿은 TCP/IP connection, Socket connection, HTTP message parsing, HTTP response message 생성 등, 핵심 비즈니스 로직을 제외한 부분을 대신 해준다. 스프링 부트에서 servlet을 직접 등록해서 사용하려면 @ServletComponentScan 을 붙이면 된다. WAS의 요청 구조 스프링 부트가 톰켓(WAS)를 띄워준다. 톰켓은 서블릿 컨테이너에 서블릿을 등록하고 싱글톤으로 관리한다. HTTP 요청마다 톰켓이 request, response...","categories": ["Spring"],
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
        "excerpt":"스프링 MVC 구조 스프링 MVC는 FrontController 패턴으로 구현되어 있다. Dispatcher Servlet(FrontController)에서 공통되는 로직을 처리하고 요청으로 들어온 URL에 해당하는 컨트롤러를 호출한다. 동작 순서 핸들러 조회 : 핸들러 매핑 map을 뒤져서 요청한 URL에 해당하는 컨트롤러가 있는지 확인한다. 핸들러 어댑터 조회 : 해당 핸들러를 실행할 수 있는 어댑터가 존재하는 지 확인한다. 핸들러 어댑터...","categories": ["Spring"],
        "tags": ["Spring","MVC"],
        "url": "/spring/MVC_Structure/",
        "teaser": null
      },{
        "title": "[Spring] MVC 기능",
        "excerpt":"요청매핑 @RequestMapping @RequestMapping은 파라미터로 URL을 넣을 수 있는데 해당 URL로 호출이 오면 메서드가 실행된다. 여러개의 URL을 배열 형태로 받을 수도 있다. @RequestMapping은 HTTP 메서드를 지정하지 않으면 HTTP 메서드 종류에 상관없이 무조건 호출된다. @GetMapping, @PostMapping, @PatchMapping, @DeleteMapping , @PutMapping 을 사용하면 HTTP 메서드에 따라 호출 여부를 결정하게 할 수 있다. @RequestMapping...","categories": ["Spring"],
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
        "excerpt":"Exception Handle 스프링 부트는 기본 설정으로 예외가 WAS에 전달되거나 Response.sendError() 가 호출되면 /error 를 호출한다. 그러면 BasicErrorController 가 제공하는 기본 정보들을 활용해서 오류 API를 생성해준다. 하지만 API 마다, 각각의 컨트롤러나 예외마다 서로 다른 응답 결과를 출력해야 할 수 있다. 때문에 API 오류 처리는 @ExceptionHandler 를 사용하는 것이 좋다. ExceptionResolver ExceptionResolver...","categories": ["Spring"],
        "tags": ["Spring","MVC"],
        "url": "/spring/exceptionHandle/",
        "teaser": null
      },{
        "title": "[알고리즘] Union find",
        "excerpt":"오늘은 Union-Find 알고리즘에 대해서 정리해보겠다. (귀엽다..) Union find algorithm 유니온 파인드 알고리즘은 상호 배타적 집합, Disjoin-set(서로소 집합) 이라고도 부른다. 여러 노드가 존재할 때, 어떤 두 개의 노드를 같은 집합으로 묶어 주고, 어떤 두 노드가 같은 집하에 있는지 확인하는 알고리즘이다. Union 연산 서로 연결된 두 노드 A, B를 선택 A의 루트...","categories": ["Algorithm"],
        "tags": ["알고리즘","Union find","자료구조"],
        "url": "/algorithm/unionFind/",
        "teaser": null
      },{
        "title": "[JPA] Intro",
        "excerpt":"JPA에 대해서 한번 정리해보자! 본 포스팅은 Inflearn 김영한님의 강의를 바탕으로 작성했다. (Spring 관련 포스팅은 전부 김영한님 강의를 바탕으로 작성됨.) ORM ORM (Object-relational mapping)은 객체와 DB 테이블이 매핑을 이루는 것을 말한다. 즉 객체가 테이블이 되도록 매핑 시켜주는 것 을 의미한다. 객체와 관계형 데이터베이스 사이의 패러다임의 불일치를 해소해주고 객체는 객체대로 설계하고 관계형...","categories": ["JPA"],
        "tags": ["Spring","JPA","DB"],
        "url": "/jpa/JPA1/",
        "teaser": null
      },{
        "title": "[JPA] 영속성 컨텍스트",
        "excerpt":"영속성 컨텍스트 영속성 컨텍스트란 엔티티를 영구 저장하는 환경이라는 뜻이다. 애플리케이션과 DB 사이에서 객체를 보관하는 가상의 DB역할을 수행한다. EntityManager를 통해서 엔티티를 저장하거나 조회를 하면 EntityManager는 영속성 컨텍스트에 엔티티를 저장한다. 엔티티의 생명주기 엔티티의 생명주기는 크게 비영속, 영속, 준영속, 삭제가 있다. 하나씩 알아보자 비영속(new/transient) 영속성 컨텍스트와 전혀 관계가 없는 상태이다. 영속성 컨텍스트가 관리하지...","categories": ["JPA"],
        "tags": ["Spring","JPA","DB"],
        "url": "/jpa/JPA2/",
        "teaser": null
      },{
        "title": "[JPA] 기본키 매핑 전략",
        "excerpt":"기본 키 매핑 전략 IDENTITY : 데이터베이스에 위임하는 전략 MYSQL에서 사용됨. AUTO_INCREMENT는 데이터베이스에 INSERT SQL을 실행한 이후에 ID값을 알 수 있기 때문에 em.persist() 시점에 바로 INSERT SQL을 실행하고 ID를 가져온다. @Entity public class Item { @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id; } SEQUENCE : 데이터베이스 시퀀스 오브젝트 사용 오라클에서...","categories": ["JPA"],
        "tags": ["Spring","JPA","DB"],
        "url": "/jpa/JPA3/",
        "teaser": null
      },{
        "title": "[JPA] 연관관계 매핑",
        "excerpt":"객체와 테이블의 패러다임 불일치 먼저 객체와 테이블 사이의 간극을 이해할 필요가 있다. 객체는 참조 를 사용해서 연관된 객체를 찾는다. 그런데 테이블은 외래키 조인을 통해서 연관된 테이블을 찾는다. 때문에 객체를 테이블에 맞춰서 설계를 하면 객체간의 협력 관계를 만들 수 없다. Member 와 Team 사이의 관계를 통해 이해해보자. 여기서 하나의 Member 는...","categories": ["JPA"],
        "tags": ["Spring","JPA","DB"],
        "url": "/jpa/JPA4/",
        "teaser": null
      }]
