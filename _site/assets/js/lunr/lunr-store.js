var store = [{
        "title": "객체 지향 설계와 스프링",
        "excerpt":"객체 지향 설계와 스프링 스프링의 핵심 좋은 객체 지향 application을 만들 수 있게 도와주는 프레임워크 SOLID SRP (Single responsiblity principle) 한 클래스는 하나의 책임만 가져야 한다. 변경파급이 낮게 설계하는 것이 좋다. OCP (Open Closed Principle) 확장에는 열려 있고 변경에는 닫혀 있게 설계해야 한다. 기능을 추가하거나 변경할 때, 클라이언트 코드의 변경...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring1/",
        "teaser": null
      },{
        "title": "스프링 핵심 원리 이해",
        "excerpt":"public static void main(String[] args) { MemberService memberService = new MemberServiceImpl(); OrderService orderService = new OrderServiceImpl(); ... } 위 코드의 문제점 OrderServiceImpl이 MemberRepository, DiscountPolicy 뿐만 아니라 구현체까지 직접 의존하고 있다. DIP 위반 : 인터페이스뿐 아니라 구현체까지 직접 의존하고 있다. OCP 위반 : 할인 정책을 바꾸려면 직접 클라이언트인 OrderServiceImpl 안의 FixDiscountPolicy를...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring2/",
        "teaser": null
      },{
        "title": "스프링 컨테이너와 스프링 빈",
        "excerpt":"스프링 컨테이너 생성 new AnnotationConfigApplicationContext(AppConfig.class), 스프링 컨테이너를 생성할 때는 구성 정보를 지정해줘야 한다. (AppConfig) 스프링 빈 등록 설정 정보 클래스 (AppConfig)를 통해서 스프링 빈을 등록한다. 빈 이름은 default로 메서드 이름이 사용된다. (직접 지정할 수도 있다.) 빈 이름은 항상 다른 이름이 부여되야 한다. 같은 이름이 들어오게 되면 무시되거나, 기존 빈을 덮어버리는...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring3/",
        "teaser": null
      },{
        "title": "싱글톤 컨테이너",
        "excerpt":"여러 클라이언트가 요청할 때마다 새로운 객체를 생성하는 것은 메모리 낭비가 심하다. 객체를 하나만 생성하고 이를 공유하도록 설계하면 된다. (싱글톤) 싱글톤 패턴 클래스의 인스턴스를 딱 1개만 생성되도록 보장하는 디자인 패턴이다. public class SingletonService { //1. static 영역에 객체를 딱 1개만 생성해둔다. private static final SingletonService instance = new SingletonService(); //2. public으로...","categories": ["Spring"],
        "tags": ["Spring"],
        "url": "/spring/Spring4/",
        "teaser": null
      }]
