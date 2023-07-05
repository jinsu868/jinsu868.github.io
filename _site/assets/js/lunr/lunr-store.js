var store = [{
        "title": "객체 지향 설계와 스프링",
        "excerpt":"객체 지향 설계와 스프링 스프링의 핵심 좋은 객체 지향 application을 만들 수 있게 도와주는 프레임워크 SOLID SRP (Single responsiblity principle) 한 클래스는 하나의 책임만 가져야 한다. 변경파급이 낮게 설계하는 것이 좋다. OCP (Open Closed Principle) 확장에는 열려 있고 변경에는 닫혀 있게 설계해야 한다. 기능을 추가하거나 변경할 때, 클라이언트 코드의 변경...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring1/",
        "teaser": null
      },{
        "title": "스프링 핵심 원리 이해",
        "excerpt":"스프링의 핵심 원리 아래 코드의 문제점은 무엇일까? public class OrderServiceImpl implements OrderService { private final MemberRepository memberRepository = new MemoryMemberRepository(); private final DiscountPolicy discountPolicy = new FixDiscountPolicy(); } 클라이언트인 OrderServiceImpl이 구현체를 직접 의존하고 있다. (DIP 위반) 만약 저장소를 DB로 바꾸려고 하거나, 할인 정책을 바꾸려고 한다면 클라이언트 코드를 수정해야 한다. (OCP...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring2/",
        "teaser": null
      },{
        "title": "스프링 컨테이너와 스프링 빈",
        "excerpt":"스프링 컨테이너 생성 과정 스프링 컨테이너 생성 new AnnotationConfigApplicationContext(AppConfig.class) 스프링 컨테이너를 생성할 때는 구성 정보를 지정해줘야 한다. (AppConfig) 스프링 빈 등록 설정 정보 클래스 (AppConfig)를 통해서 스프링 빈을 등록한다. 빈 이름은 default로 메서드 이름이 사용된다. (직접 지정할 수도 있다.) 빈 이름은 항상 다른 이름이 부여되야 한다. 같은 이름이 들어오게 되면...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring3/",
        "teaser": null
      },{
        "title": "싱글톤 컨테이너",
        "excerpt":"싱글톤 패턴을 사용하는 이유 여러 클라이언트가 요청할 때마다 새로운 객체를 생성하는 것은 메모리 낭비가 심하다. 객체를 하나만 생성하고 이를 공유하도록 설계하자. -&gt; 싱글톤 패턴 싱글톤 패턴 클래스의 인스턴스를 딱 1개만 생성되도록 보장하는 디자인 패턴이다. public class SingletonService { private static final SingletonService instance = new SingletonService(); public static SingletonService getInstance()...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring4/",
        "teaser": null
      },{
        "title": "컴포넌트 스캔",
        "excerpt":"컴포넌트 스캔 스프링은 설정 정보가 없어도 자동으로 스프링 빈을 등록하는 컴포넌트 스캔이라는 기능을 제공한다. 컴포넌트 스캔을 사용하면 @Component가 붙은 클래스를 찾아서 다 빈으로 등록한다. @Repository, @Service, @Configuration, @Controller를 까보면 안에 @Component를 가지고 있다. -&gt; 다 빈으로 등록된다.(Spring이 제공하는 기능) 컴포넌트 스캔을 사용하려면 @ComponentScan을 설정 정보에 붙여줘야 한다. (@SpringBootApplication 안에 @ComponentScan이...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring5/",
        "teaser": null
      },{
        "title": "의존관계 자동 주입",
        "excerpt":"의존관계 주입 방식 생성자 주입 @Component public class OrderServiceImpl implements OrderService { private final MemberRepository memberRepository; private final DiscountPolicy discountPolicy; @Autowired public OrderServiceImpl(MemberRepository memberRepository, DiscountPolicy discountPolicy) { this.memberRepository = memberRepository; this.discountPolicy = discountPolicy; } } 생성자를 통해서 의존관계를 주입 받는 방식이다. 생성자 호출시점에 딱 1번만 호출된다. 변경이 불가능하지만 대부분의 경우...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring6/",
        "teaser": null
      },{
        "title": "빈 생명주기 콜백",
        "excerpt":"빈 생명주기 콜백 콜백의 필요성 DB, network 커넥션들을 애플리케이션 시작 시점에 미리 연결해둬야 빠르게 사용할 수 있다. 이를 위해서는 객체의 초기화와 종료 작업이 필요하다. 스프링 빈의 라이프사이클 객체 생성 의존관계 주입 스프링 빈은 객체가 생성되고, 의존관계 주입이 다 끝나야 사용할 수 있다. 스프링은 의존관계 주입이 완료되면 스프링 빈에게 콜백 메서드를...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring7/",
        "teaser": null
      },{
        "title": "빈 스코프",
        "excerpt":"Bean Scope 스프링은 default로 빈을 싱글톤 스코프로 생성한다. 싱글톤 스코프로 생성된 빈은 스프링 컨테이너 시작 시점에 생성되어 스프링 컨테이너 종료까지 유지된다. 스프링은 싱글톤 스코프 말고도 프로토타입 스코프, 웹 스코프(request, session, application)를 지원한다. 하나씩 살펴보자 프로토타입 스코프 프로토타입 스코프를 잘 이해하기 위해 싱글톤 스코프부터 복습해보자. 싱글톤 스코프로 생성된 빈은 조회를 하면...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring8/",
        "teaser": null
      },{
        "title": "스프링 웹 MVC",
        "excerpt":"웹 서버와 웹 애플리케이션 서버 웹 서버 (Web server) 정적 리소스 제공 (html, css, js, 이미지, 영상) 웹 애플리케이션 서버 (WAS - Web Application Server) 웹 서버의 기능을 포함하고 프로그램 코드를 실행해서 애플리케이션 로직 수행 동적 html, HTTP API(JSON), 서블릿, JSP, 스프링 MVC 등 이 둘은 경계가 모호하다. 웹 시스템의...","categories": ["MVC"],
        "tags": ["MVC"],
        "url": "/mvc/mvc1/",
        "teaser": null
      },{
        "title": "팩토리 패턴",
        "excerpt":"Factory Method Pattern이란? 팩토리 메서드 패턴에서는 객체를 생성하기 위한 인터페이스를 정의하고, 어떤 클래스의 인스턴스를 만들지는 서브 클래스에서 결정하게 하는 패턴이다. 팩토리 메서드는 객체를 생성, 반환하는 메서드이다. 팩토리 클래스는 하위 클래스에서 팩토리 메서드를 오버라이딩해서 객체를 반환하게 하여 상위 클래스와 하위 클래스가 분리되게 함으로써 결합을 느슨하게 한다. DIP를 활용한다. 팩토리 패턴은 왜...","categories": ["CS"],
        "tags": ["Design pattern"],
        "url": "/cs/Factory/",
        "teaser": null
      },{
        "title": "싱글톤 패턴",
        "excerpt":"디자인패턴 디자인 패턴이란 프로그램을 설계할 때 발생했던 문제점들을 객체 간의 상호 관계 등을 이용해서 해결할 수 있도록 하나의 규약 형태로 만들어 놓은 것을 뜻한다. 싱글톤 패턴이란? 싱글톤 패턴이란 하나의 클래스에 대해 오직 하나의 인스턴스만 가지고 이를 공유하는 패턴이다. 데이터베이스 연결 모듈에 많이 사용된다. 장점 인스턴스를 한 번 생성하면 더 이상...","categories": ["CS"],
        "tags": ["Design pattern"],
        "url": "/cs/Singleton/",
        "teaser": null
      },{
        "title": "전략 패턴",
        "excerpt":"Strategy pattern 객체의 행위를 바꾸고 싶은 경우 직접 수정하지 않고 전략이라고 부르는 캡슐화한 알고리즘을 컨텍스트 안에서 바꿔주면서 상호 교체가 가능하게 만드는 패턴이다. 특정 컨텍스트에서 알고리즘을 별도로 분리하는 설계 방법을 의미한다. 쉽게 말해서 특정 기능을 수행하는데 다양한 알고리즘이 적용될 수 있을 때, 알고리즘을 별도로 분리하는 설계 방법을 의미하는 것이다. Strategy pattern의...","categories": ["CS"],
        "tags": ["Design pattern"],
        "url": "/cs/Strategy/",
        "teaser": null
      }]
