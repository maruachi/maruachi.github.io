---
layout: posts
title: 양자컴퓨터와 그로버 알고리즘
tag: quantum computer
categories: Quantum Technology
---

### Quantum state

물리 세계에서 길이 스케일이 매우 작아지면 우리가 직관적으로 알고 있는 세상과 다른 모습을 보인다. 우리가 일반적으로 입자라고 알고 있던 물질이 파동의 성질을 띄기도 하고 파동이라고 알고 있던 물질이 입자 성질을 나타내기도 한다. 이런 직관과 반하는 모습이지만 양자 역학이라는 이론적 체계로 높은 정확도로 물리 세계를 기술 할 수 있다. 이때 양자 역학의 대상이 되는 것은 입자도 파동도 아닌 양자 상태이다. 양자 상태들의 역학을 보는 것이 양자 역학이다. 이러한 양자 상태들은 양자 역학에서 기술할 수 있는 많은 물리적 정보를 담고 있다. 일반적으로 우리가 물질을 기술할 때, 예를 들어 컵을 기술한다고 치면 컵이 여기에 위치해 있고 이것의 모양이 어떻고 이런 식의 기술이 많다. 하지만 양자 역학에서는 단순히 물질이 여기 있다 저기 있다 기술할 수 없다. 양자 상태라는 것은 물질이 위치나 상태나 에너지가 명확하게 정해져 있지 않아서 확률로 표현한다.


### Quantum technology

양자 정보 또는 양자 컴퓨터에서 양자 역학이라는 것은 양자 중첩(superposition)과 얽힘(entanglement)을 활용한 기술이다. 양자 중첩이란 우리가 양자 입자에 대해서 관측 가능한 상태들이 있는데 그러한 양자 상태들이 확률적으로 섞여 있는 것을 말한다. 예를 들어 상태 A, B 가 관측 가능하다고 했을 때, A로 관측될 확률 1/2 B로 관측될 확률 1/2로 나누어져 있다. 양자 얽힘이라는 것은 여러 양자입자들이 확률적으로 섞여 있는 것을 말한다. 이런 표현은 정확하지는 않지만 명확한 수학적 정의를 비전공자에게 설명하기 힘들다. 그래서 현상론적으로 얘기했을 때는 얽혀 있는 양자 입자들에게는 다음과 같은 일이 일어난다. 하나의 양자 입자를 관측해서 상태가 결정되는 이것이 다른 입자의 양자 상태를 결정하는데도 영향을 미치는 것이다. 극단적인 예로는 두 개의 입자기 있을 때 하나의 양자 입자에 대해 측정을 하면 알아서 다른 양자 입자의 상태가 결정이 된다.

양자역학이 들어갔다고 다 양자 기술이 아니다!
예를 들어 고전적 컴퓨터에서 사용되는 트랜지스터를 역학적으로 기술하기 위해서 양자역학이 필수적이다. 실리콘 도핑에 따른 전기적 특성의 변화, 도핑된 실리콘의 접합에서 일어나는 물리 현상은 모두 양자적인 현상에서 기인한다. 하지만 우리는 트랜지스터를 양자 기술이라고 부르지는 않는다. 그 이유는 양자 중첩과 얽힘을 사용하지 않고 단순히 전자기적 특성만 정보 처리에 반영하기 때문이다.

### Block shpere

![block sphere](https://upload.wikimedia.org/wikipedia/commons/6/6b/Bloch_sphere.svg)

양자 상태를 표현하는 차원의 수가 2라면 block sphere를 통해 시각적으로 이해할 수 있다. 양자 상태라는 것은 복소 공간에서 기술되는데, 차원이 2개면 총 4개의 변수가 존재한다. 양자 역학의 필수 제한 조건인 normalization condition 때문에 변수가 하나 줄어서 총 3개의 변수만으로 2개의 양자상태를 기술할 수 있다. 위에 그림처럼 3차원 축으로 기술하고 normalization condition으로 구 표현으로 표현할 수 있는 양자 상태가 제한된다.

만약 2개의 양자 상태로 기술되는 qubit가 하나 존재하면 qubit가 표현할 수 있는 양자 상태는 block sphere에 존재한다.

### Single Qubit Gates

Block sphere 상에서 양자 상태가 결정이 되면 이러한 양자 상태를 block sphere에 다른 위치로 옮길 수 있다. 구면체 상에서는 양자 상태를 회전 시키는 것으로 이해할 수 있는데, 특정한 방향으로 180도 회전 시킨다. 이런 식으로 양자 상태를 조절할 수 있는데, 이를 single qubit gates라고 부른다.

### Proving Universality

> taking any arbitrary set of inputs and converting them to an arbitrarily chosen set of corresponding outputs, we call it universal.
> Quantum computers similarly take input states and convert them into output states. We will therefore be able to define universality in a similar way.
> To be more precise, and to be able to prove when universality can and cannot be achieved


## Quantum Machine Learning

> here are quantum algorithms for
machine learning that exhibit quantum speedups. For example, the
quantum basic linear algebra subroutines (BLAS)—Fourier transforms, finding eigenvectors and eigenvalues, solving linear equations—exhibit exponential
quantum speedups over their best known classical counterparts. This
quantum BLAS (qBLAS) translates into quantum speedups for a variety of data
analysis and machine learning algorithms including linear algebra, least-squares
fitting, gradient descent, Newton’s method, principal component analysis, linear,
semidefinite, and quadratic programming, topological analysis, and support
vector machines.

### Qunautm ML time complexity table

| ML algorithm                   | time complexity |
|--------------------------------|-----------------|
| Bayesian Inference             | O(√N)           |
| Online Perceptron              | O(√N)           |
| Least squares fitting          | O(log N(∗))     |
| Classical BM                   | O(√N)           |
| Quantum BM                     | O(log N(∗))     |
| Quantum PCA                    | O(log N(∗))     |
| Quantum SVM                    | O(log N(∗))     |
| Quantum reinforcement learning | O(√N)           |

### PCA

> Comparing with the covariance matrix C for the classical data we see that the
density matrix for the quantum version of the data is the covariance matrix,
up to an overall factor.
>
> ...

>Classical algorithms for performing PCA scale as O(d2) in terms of computational complexity and query complexity.
>
> ...
>
>The quantum algorithm scales as O(log d)2 in both computational complexity and query complexity


## Quantum algorithm - Grover Algorithm

![Amplitude Amplification](https://qiskit.org/textbook/ch-algorithms/images/grover_step3.jpg)

![Grover circuit](https://qiskit.org/textbook/ch-algorithms/images/grover_circuit_high_level.png)

## 참고자료
[1] [Qiskit-official document: grover-algorithm](https://qiskit.org/textbook/ch-algorithms/grover.html)<br>
[2] [Quantum Machine Learning **2018** nature](https://arxiv.org/pdf/1611.09347.pdf)<br>
[3] [Quantum supremacy using a programmable superconducting processor **2019** nature](https://www.nature.com/articles/s41586-019-1666-5)<br>
[4] [First quantum computer to pack 100 qubits enters crowded race](https://www.nature.com/articles/d41586-021-03476-5)
