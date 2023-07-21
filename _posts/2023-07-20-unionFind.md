---
title: "[알고리즘] Union find"
categories: 
    - Algorithm
tags:
    - 알고리즘
    - Union find
    - 자료구조
typora-root-url: ../
---

<br>



![img1](/assets/images/23_1.png){: width="70%"", height="40%""}



오늘은 Union-Find 알고리즘에 대해서 정리해보겠다. 

<br>



# *Union find algorithm*

>  **유니온 파인드** 알고리즘은 상호 배타적 집합, Disjoin-set(서로소 집합) 이라고도 부른다. 여러 노드가 존재할 때, 어떤 두 개의 노드를 같은 집합으로 묶어 주고, 어떤 두 노드가 같은 집하에 있는지 확인하는 알고리즘이다.

<br>



### *Union 연산*

* 서로 연결된 두 노드 A, B를 선택
* A의 루트 노드와 B의 루트 노드를 찾기 (`find`연산)
* B를  A의 부모 노드로 설정한다. (parent 리스트의 값 수정)



###  union 코드

```python
def union(x, y):
  x = find(parent, x)
  y = find(parent, y)
  if x > y:
    parent[x] = y
  else:
    parent[y] = x
```

<br>



### *Find 연산*

* 해당 노드의 루트 노드를 찾음
* 경로 압축을 통해 시간복잡도를 줄일 수 있다.
  * 예시를 통해 확인해보자

![img1](/assets/images/23_2.png){: width="70%"", height="40%""}

위와 같은 경우 5의 루트 노드를 찾기 위해서는 5 -> 4 -> 3 -> 2 -> 1을 거쳐서 총 O(V) 만큼의 시간복잡도가 걸린다. 그런데 `경로 압축`을 통해 부모를 루트로 설정하게 되면 아래와 같이 한번에 찾을 수 있게 된다.

<br>

![img1](/assets/images/23_3.png){: width="70%"", height="40%""}

5의 부모 -> 1

<br>



### find() 코드

```python
def find(parent, x):
	if parent[x] != x:
    parent[x] = find(parent, parent[x])
  return parent[x]
```

<br>

<br>





