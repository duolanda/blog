(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1118:function(e,t,a){"use strict";a.r(t);var _=a(11),v=Object(_.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[_("img",{attrs:{src:a(615),alt:"image.png"}}),e._v("\n整个标准库都是按照模板化编程的思维来写的，而不是面向对象思维。")]),e._v(" "),_("h1",{attrs:{id:"_1-c-常用功能函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-c-常用功能函数"}},[e._v("#")]),e._v(" 1.C++ 常用功能函数")]),e._v(" "),_("h2",{attrs:{id:"_1-1-数据类型转换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-数据类型转换"}},[e._v("#")]),e._v(" 1.1 数据类型转换")]),e._v(" "),_("h3",{attrs:{id:"_1-1-1-conversion-function-转换函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-conversion-function-转换函数"}},[e._v("#")]),e._v(" 1.1.1 conversion function（转换函数）")]),e._v(" "),_("p",[_("img",{attrs:{src:a(616),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("我们这里有一个分数，可以认为分子/分母就是 double，因此设计者希望分数可以被当成 double，于是编写黄色高亮部分。意思是 Fraction 可以被转为 double，编译器在碰到任何需要把 Fraction 转为 double 的时候就调用黄色部分。")]),e._v(" "),_("li",[e._v("作用：把一个 class 的类型转换成你想要的、自认为合理的类型。")]),e._v(" "),_("li",[e._v("格式："),_("code",[e._v("operator double() const {...}")]),e._v("(以转换成 double 类型为例)\n"),_("ul",[_("li",[_("code",[e._v("double()")]),e._v("不可以有参数；没有 return type（毕竟后面已经写清楚是 double 了）；分子和分母都不应该改变，所以通常要加"),_("code",[e._v("const")])])])]),e._v(" "),_("li",[e._v("只要你认为合理，你可以在类中写多个转换函数，将 class 类型转换成多个其他类型。")])]),e._v(" "),_("h3",{attrs:{id:"_1-1-2-non-explicit-one-argument-ctor-与-explicit-one-argument-ctor"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-non-explicit-one-argument-ctor-与-explicit-one-argument-ctor"}},[e._v("#")]),e._v(" 1.1.2 non-explicit-one-argument ctor 与 explicit-one-argument ctor")]),e._v(" "),_("p",[_("img",{attrs:{src:a(617),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("这种构造函数很特别，称为** non-explicit-one-argument ctor**，one argument 指的是一个实参（两个也可以，但是一个就够了），explicit 是关键字，这里没有加，所以是 non-explicit")]),e._v(" "),_("li",[e._v("作用：把其他类型转换为这个 class 的类型。与转换函数刚好相反。")]),e._v(" "),_("li",[e._v("执行到"),_("code",[e._v("f+4")]),e._v("时，编译器发现 Fraction 定义了 +，但是参数要是 Fraction，于是编译器尝试将 4 转为 Fraction，由于有绿色的部分，4 变成了 4/1，可以正常相加。")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(618),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("如果黄绿二者并存，且代码为"),_("code",[e._v("Fraction d2=f+4;")]),e._v("编译器发现会有两条路可以走：\n"),_("ul",[_("li",[e._v("可以通过 non-explicit-one-argument ctor 把 4 转换成 Fraction 类型，再与 f 相加。")]),e._v(" "),_("li",[e._v("可以通过转换函数把 Fraction 类型的 f 转换成 0.6，再与 4 相加，再通过 non-explicit-one-argument ctor 把 4.6 转换成 Fraction 类型。")])])]),e._v(" "),_("li",[e._v("此时会产生二义性（歧义），编译器报错")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(619),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("explicit 的意思是明确的。告诉编译器，只有真正需要构造函数的时候再调用构造函数，编译器不能擅自把 4 转为 4/1")]),e._v(" "),_("li",[e._v("这个关键字只在这里使用（其实模板的一个很小的地方也会用到，但是太细微了）")])]),e._v(" "),_("h2",{attrs:{id:"_1-2-pointer-like-classes"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-pointer-like-classes"}},[e._v("#")]),e._v(" 1.2 "),_("strong",[e._v("pointer-like classes")])]),e._v(" "),_("h3",{attrs:{id:"_1-2-1-智能指针"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-智能指针"}},[e._v("#")]),e._v(" 1.2.1 智能指针")]),e._v(" "),_("p",[_("img",{attrs:{src:a(620),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("为什么我们要设计像指针的类，是为了做比指针更多的事")]),e._v(" "),_("li",[e._v("智能指针中一定有一个一般的指针。这里 px 就是那个指针。")]),e._v(" "),_("li",[e._v("指针能做的它也应该能做，所以它一定有"),_("code",[e._v("*")]),e._v(" 、"),_("code",[e._v("->")]),e._v("这两个操作符的重载，且实现手法都是固定的。")]),e._v(" "),_("li",[_("code",[e._v("sp->method()")]),e._v("等同于 "),_("code",[e._v("px->method()")]),e._v("，这时大家可能会困惑，"),_("code",[e._v("->")]),e._v("已经把 sp 变成 px 了，怎么还会有一个"),_("code",[e._v("->")]),e._v("，这是因为 C++ 语法规定"),_("code",[e._v("->")]),e._v("不会被“消耗”，在发挥作用之后依然可以使用。注意，"),_("code",[e._v("*")]),e._v("使用一次之后就会被“消耗”，*sp 就是变成 *px。")])]),e._v(" "),_("h3",{attrs:{id:"_1-2-2-迭代器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-迭代器"}},[e._v("#")]),e._v(" 1.2.2 迭代器")]),e._v(" "),_("p",[_("img",{attrs:{src:a(621),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("迭代器主要用来遍历容器")]),e._v(" "),_("li",[e._v("迭代器和上面一般的智能指针有些不同，不光要处理"),_("code",[e._v("*")]),e._v("和"),_("code",[e._v("->")]),e._v("，还要重载"),_("code",[e._v("++")]),e._v("、"),_("code",[e._v("--")]),e._v("等，对"),_("code",[e._v("*")]),e._v("和"),_("code",[e._v("->")]),e._v("的处理也有所不同")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(622),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("这里用双向链表的迭代器举例")]),e._v(" "),_("li",[e._v("绿色的 node 就是这里真正的指针")]),e._v(" "),_("li",[e._v("用户使用"),_("code",[e._v("*")]),e._v("是为了取得数据，于是我们解参考，再把 data 返回给用户")]),e._v(" "),_("li",[e._v("用户使用"),_("code",[e._v("->")]),e._v("等同于"),_("code",[e._v("(*ite).method()")]),e._v("等同于"),_("code",[e._v("(&(*ite))->method()")]),e._v("，于是我们设计成返回"),_("code",[e._v("&(operator*())")]),e._v("，其中"),_("code",[e._v("operator*()")]),e._v("就是上面的"),_("code",[e._v("*")]),e._v("部分")])]),e._v(" "),_("h2",{attrs:{id:"_1-3-function-like-classes"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-function-like-classes"}},[e._v("#")]),e._v(" 1.3 function-like classes")]),e._v(" "),_("p",[_("img",{attrs:{src:a(623),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[_("code",[e._v("()")]),e._v("被称为函数调用操作符，所以任何一个东西如果能接受"),_("code",[e._v("()")]),e._v("，我们就称它为 function-like")]),e._v(" "),_("li",[e._v("例子中的三个类都重载了"),_("code",[e._v("()")]),e._v("，所以他们都是 function-like\n"),_("ul",[_("li",[_("code",[e._v("identity")]),e._v("的意思是同一个东西，所以它接收 x 就传回来 x")]),e._v(" "),_("li",[_("code",[e._v("select1st")]),e._v("接收 Pair 类型的元素，取出第一个。代码示例："),_("code",[e._v("select1st<Pair>()()")]),e._v("，前面的括号负责创建临时对象，后面的括号才是调用函数，两者不同")]),e._v(" "),_("li",[_("code",[e._v("select2nd")]),e._v("，同理，取出第二个")])])]),e._v(" "),_("li",[e._v("这样的 class 生成的对象称为函数对象或仿函数")]),e._v(" "),_("li",[e._v("灰色部分其实是有内容的，还很长，继承了其他的 class")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(624),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[_("code",[e._v("identity")]),e._v(" "),_("code",[e._v("select1st")]),e._v(" "),_("code",[e._v("select2ed")]),e._v("继承了"),_("code",[e._v("unary_function")]),e._v("，"),_("code",[e._v("plus")]),e._v(" "),_("code",[e._v("minus``equal_to``less")]),e._v("继承了"),_("code",[e._v("binary_function")]),e._v("，前者意思是一个操作数，后者是两个操作数")]),e._v(" "),_("li",[e._v("这些奇特父类的大小理论上为 0（实现上 sizeof 可能会得到 1），且没有数据、没有函数，只有一些 typedef 定义。具体为什么继承这些是一个很大的话题，请参见标准库课程。")])]),e._v(" "),_("h2",{attrs:{id:"_1-4-namespace-经验谈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-namespace-经验谈"}},[e._v("#")]),e._v(" 1.4 namespace 经验谈")]),e._v(" "),_("p",[_("img",{attrs:{src:a(625),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("namespace 的主要用途就是为了避免命名冲突，在大型工程中尤为常见，自己在写一些测试代码时也可以使用命名空间封装起来。")]),e._v(" "),_("li",[e._v("这里的例子是测试程序")])]),e._v(" "),_("h2",{attrs:{id:"_1-5-模板"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-模板"}},[e._v("#")]),e._v(" 1.5 模板")]),e._v(" "),_("h3",{attrs:{id:"_1-5-1-class-template-类模板"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-1-class-template-类模板"}},[e._v("#")]),e._v(" 1.5.1 class template（类模板）")]),e._v(" "),_("p",[_("img",{attrs:{src:a(626),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("前面的课程讲过，这里简单带过")]),e._v(" "),_("li",[e._v("其实比面向对象简单，因为在涉及到继承和虚函数的时候可能会有很多层、很复杂")]),e._v(" "),_("li",[e._v('把类型"提取"出来，在用的时候在进行替换补充就好')])]),e._v(" "),_("h3",{attrs:{id:"_1-5-2-function-template-函数模板"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-2-function-template-函数模板"}},[e._v("#")]),e._v(" 1.5.2 function template（函数模板）")]),e._v(" "),_("p",[_("img",{attrs:{src:a(627),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("前面的课程讲过，这里简单带过")]),e._v(" "),_("li",[e._v("使用比类模板更简单，使用时无需指明 type")]),e._v(" "),_("li",[e._v("如果 stone 没有重写"),_("code",[e._v("<")]),e._v("，就会编译失败")])]),e._v(" "),_("h3",{attrs:{id:"_1-5-3-member-template-成员模板"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-3-member-template-成员模板"}},[e._v("#")]),e._v(" 1.5.3 member template（成员模板）")]),e._v(" "),_("p",[_("img",{attrs:{src:a(628),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("黄色部分是模板里的一个 member，而它本身又是一个模板，我们将它称为成员模板。")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(629),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("一般用在构造函数中")]),e._v(" "),_("li",[e._v("设计四个类，鱼类、鸟类、鲫鱼、麻雀")]),e._v(" "),_("li",[e._v("把鲫鱼和麻雀构成 pair，鱼类和鸟类构成 pair，可以把鲫鱼和麻雀的 pair 作为初值放到鸟类和鱼类的 pair 里，但反之不行")]),e._v(" "),_("li",[e._v("如何体现这种设计，我允许你放任意的 T1 T2，并且构造的时候可以放任意的 U1 U2，但 U1 U2 必须满足赋值动作"),_("code",[e._v("first(p.first), second(p.second)")]),e._v("初值是鲫鱼和麻雀，鲫鱼是鱼类满足转型"),_("code",[e._v("first(p.first)")]),e._v("，同理，麻雀也是鸟类，所以可以。如果初值是鲸鱼和麻雀便不行，因为鲸鱼不是鱼类。")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(630),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("new 一个鲫鱼，指针指向鱼类，是可以的。称为 up-cast。")]),e._v(" "),_("li",[e._v("既然指针可以，智能指针也必须可以，为了实现这一点，要写上方的成员模板代码")])]),e._v(" "),_("h3",{attrs:{id:"_1-5-3-specialization-模板特化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-3-specialization-模板特化"}},[e._v("#")]),e._v(" 1.5.3 specialization（模板特化）")]),e._v(" "),_("p",[_("img",{attrs:{src:a(631),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("任意的类型都会来到 hash{}，但如果指定的是 char、int、long，编译器就会用这三段代码")]),e._v(" "),_("li",[e._v("上面的框是泛化，下面的框是特化")])]),e._v(" "),_("h3",{attrs:{id:"_1-5-3-partial-specialization-模板偏特化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-3-partial-specialization-模板偏特化"}},[e._v("#")]),e._v(" 1.5.3 partial specialization（模板偏特化）")]),e._v(" "),_("h4",{attrs:{id:"_1-个数上的偏"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-个数上的偏"}},[e._v("#")]),e._v(" 1.个数上的偏")]),e._v(" "),_("p",[_("img",{attrs:{src:a(632),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("在有多个模板参数时，绑定其中一个参数")]),e._v(" "),_("li",[e._v("一定要严格的从左到右，比方说有五个模板参数，不能跳着绑定 1、3、5")])]),e._v(" "),_("h4",{attrs:{id:"_2-范围上的偏"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-范围上的偏"}},[e._v("#")]),e._v(" 2.范围上的偏")]),e._v(" "),_("p",[_("img",{attrs:{src:a(633),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("将什么类型都可以传的模板，偏特化为只有指针类型（指针什么都能传）能传的模板。")]),e._v(" "),_("li",[e._v("是指针用一套代码，不是指针用另一套代码")]),e._v(" "),_("li",[e._v("泛化的 T 和 T* 中的 T 是两样东西，为了避免混淆，可以写成 U 和 U*")])]),e._v(" "),_("h3",{attrs:{id:"_1-5-4-template-template-parameter-模板的模板参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-4-template-template-parameter-模板的模板参数"}},[e._v("#")]),e._v(" 1.5.4 template template parameter（模板的模板参数）")]),e._v(" "),_("p",[_("img",{attrs:{src:a(634),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("一个模板的参数是模板类型。例子中第二个参数是模板")]),e._v(" "),_("li",[e._v("只有在模板的尖括号中 typename 和 class 才能共通，其他地方都不可以")]),e._v(" "),_("li",[e._v("在例子中，使用者可以指定任意的元素类型和容器类型。但是"),_("code",[e._v("list")]),e._v("其实是有第二模板参数的，平时可以不写是因为有默认值，但这里会报错。为了解决这个问题，引入中间框内的两行（具体含义不解释，比较复杂，是 C++ 11 语法）")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(635),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("这个例子中不再传容器，而是传智能指针，因为大部分智能指针只有一个模板参数，不会报错。但"),_("code",[e._v("weak_ptr")]),e._v("和"),_("code",[e._v("auto_ptr")]),e._v("因为一些特性也不可以，这不是我们的重点")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(636),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("Sequence 是模板里的参数，而且本身是模板，但确实不是模板的模板参数")]),e._v(" "),_("li",[e._v("如果我们在使用时把两个参数都写出来，必须写成"),_("code",[e._v("stack<int, list<int>>")]),e._v("，会发现它已经不是模板了，而是已经完全绑定写死了，所以与前面的例子并不相同")])]),e._v(" "),_("h2",{attrs:{id:"_1-6-c-标准库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-c-标准库"}},[e._v("#")]),e._v(" 1.6 C++ 标准库")]),e._v(" "),_("p",[_("img",{attrs:{src:a(637),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("标准库提供给我们可以直接用的一个就是容器（数据结构），另一个就是算法")]),e._v(" "),_("li",[e._v("建议大家都用一遍，测试一遍，熟记有哪些内容，避免未来重复造轮子")])]),e._v(" "),_("h1",{attrs:{id:"_2-c-11-和-reference"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-c-11-和-reference"}},[e._v("#")]),e._v(" 2.C++11 和 reference")]),e._v(" "),_("p",[e._v("C++11 有专门的课程，这里挑选了三个重要的小主题讲解")]),e._v(" "),_("h2",{attrs:{id:"_2-1-variadic-templates-可变模板参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-variadic-templates-可变模板参数"}},[e._v("#")]),e._v(" 2.1 variadic templates（可变模板参数）")]),e._v(" "),_("p",[_("img",{attrs:{src:a(638),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("三个里面最重要的，其他两个只是语法糖")]),e._v(" "),_("li",[e._v("可以传入数量不定的模板参数，它把传入的参数分为："),_("strong",[e._v("一个")]),e._v("和"),_("strong",[e._v("一包")]),e._v("。一包使用"),_("code",[e._v("...")]),e._v("表示，注意一个是"),_("code",[e._v("typename... Types")]),e._v("，一个是"),_("code",[e._v("Types&... args")]),e._v("，位置不同")]),e._v(" "),_("li",[e._v("例子中使用了递归，输出完 42 的时候"),_("code",[e._v("args...")]),e._v("就是空了，所以有写了上面的"),_("code",[e._v("void print()")]),e._v("，调用它来结束。当然，实际使用中也不一定递归，还有其他很多运用。")]),e._v(" "),_("li",[e._v("如果你想确定这“一包”参数具体有多少个，可以用语法："),_("code",[e._v("sizeof...(args)")])]),e._v(" "),_("li",[e._v("整个标准库都用这个新语法翻新了")])]),e._v(" "),_("h2",{attrs:{id:"_2-2-auto"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-auto"}},[e._v("#")]),e._v(" 2.2 auto")]),e._v(" "),_("p",[_("img",{attrs:{src:a(639),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("面对复杂的返回类型可以用"),_("code",[e._v("auto")]),e._v("自动推导出来")]),e._v(" "),_("li",[e._v("过去 ite 的类型要写很长，现在写成"),_("code",[e._v("auto")]),e._v("就可以了")]),e._v(" "),_("li",[e._v("使用"),_("code",[e._v("auto")]),e._v("的时候一定要让编译器能帮你推，最下面的框就不行")]),e._v(" "),_("li",[e._v("作为标准库的使用者，都应该具备能把容器类型写出来的能力，"),_("code",[e._v("auto")]),e._v("只是方便我们而已，但"),_("code",[e._v("lambda")]),e._v("的类型是真写不出来")])]),e._v(" "),_("h2",{attrs:{id:"_2-3-ranged-base-for"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-ranged-base-for"}},[e._v("#")]),e._v(" 2.3 ranged-base for")]),e._v(" "),_("p",[_("img",{attrs:{src:a(640),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("它有两个参数，一个是自己创建的变量，另一个是一个容器")]),e._v(" "),_("li",[e._v("范围 for 循环可以将一个容器(第二个参数)里的元素依次传到第一个参数，并在该循环体中依次对每一个元素做操作")]),e._v(" "),_("li",[e._v("如果你不想影响容器中的参数，请 "),_("strong",[e._v("pass by value")]),e._v("，否则请 "),_("strong",[e._v("pass by reference")])]),e._v(" "),_("li",[e._v("这里引出一个概念，引用其实是一种指针（从编译器实现的角度）")])]),e._v(" "),_("h2",{attrs:{id:"_2-4-reference"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-reference"}},[e._v("#")]),e._v(" 2.4 reference")]),e._v(" "),_("p",[_("img",{attrs:{src:a(641),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("x 是整数，p 是指向 x 的指针，r 是 x 的引用。x、p、r 都是变量，都占用内存，x 是整数占 4 个字节，p 是指针，也占 4 个字节，r 代表 x，所以也是整数，它代表的东西多大，它也多大，也是 4 个字节")]),e._v(" "),_("li",[e._v("其实编译器是把 r 当成指针处理的，r 实际上就是 4 个字节，但编译器会制造“假象”，如果 x 大小是 100 字节，"),_("code",[e._v("sizeof(r)")]),e._v("也会是 100 字节，并且 r 和 x 的地址也是完全相同的，这是好事，符合我们对 r 逻辑上的解读（r 是 x 的代表，x 是什么，r 就应该是什么）")]),e._v(" "),_("li",[e._v("reference 一定要有初值，说清楚它代表谁，而且设完之后不能再变了，不能再代表其他了。")]),e._v(" "),_("li",[_("code",[e._v("r = x2")]),e._v("相当于"),_("code",[e._v("x=x2")]),e._v("，所以并不是说 r 变成代表 x2 了，而是 r 和 x 都变成 5 了。")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(642),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("验证代码，object 和其 reference 的大小相同，地址也相同（全都是假象）")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(643),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("reference 是一种漂亮的 pointer")]),e._v(" "),_("li",[e._v("reference 通常不用于声明变量，而**用于参数类型（parameters type）和返回类型（return type）**的描述，即多用于参数传递上")]),e._v(" "),_("li",[e._v("可以发现，pass by value（func2） 和 pass by reference（func3）在被调用端写法是相同的，这是件很棒的事，不会像 pass by pointer（func1）一样不同，并且 reference 在保证写法相同的前提下速度又更快了")]),e._v(" "),_("li",[e._v("如果 "),_("code",[e._v("imag(const double& im){...}")]),e._v("和"),_("code",[e._v("imag(const double im){...}")]),e._v("被视为不同的话就麻烦大了，因为在调用 imag 时，编译器就会不知道你要调用哪个，所以二者不能同时存在。")]),e._v(" "),_("li",[_("code",[e._v("const")]),e._v("是函数签名的一部分，加不加 const 是两个函数")])]),e._v(" "),_("h1",{attrs:{id:"_3-object-model-虚函数、虚指针、虚表、动态绑定"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-object-model-虚函数、虚指针、虚表、动态绑定"}},[e._v("#")]),e._v(" 3.Object Model（虚函数、虚指针、虚表、动态绑定）")]),e._v(" "),_("p",[e._v("一些底层的，表面看不到的东西，对于 C++ 理解至关重要")]),e._v(" "),_("h2",{attrs:{id:"_3-1-复合-继承关系下的构造和析构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-复合-继承关系下的构造和析构"}},[e._v("#")]),e._v(" 3.1 "),_("strong",[e._v("复合&继承关系下的构造和析构")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(644),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("回顾一下之前讲过的复合关系下的构造和析构顺序，继承关系下的构造和析构顺序")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(645),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("考虑继承+复合关系下的构造和析构，以下结论为老师手头编译器得到的结果")]),e._v(" "),_("li",[e._v("先调用父类构造函数、再调用 Component，最后自己；析构反过来，先自己、再 Component、再 Base")])]),e._v(" "),_("h2",{attrs:{id:"_3-2-关于-vptr-虚指针-和-vtbl-虚表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-关于-vptr-虚指针-和-vtbl-虚表"}},[e._v("#")]),e._v(" 3.2 "),_("strong",[e._v("关于 vptr（虚指针）和 vtbl（虚表）")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(646),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("B 继承 A，C 继承 B")]),e._v(" "),_("li",[e._v("当子类继承父类时，除了继承数据之外，同时会继承父类的函数（父类如果有虚函数，子类也一定有）")]),e._v(" "),_("li",[e._v("子类继承父类的函数，继承的其实是它的"),_("strong",[e._v("调用权")]),e._v("，而不是大小")]),e._v(" "),_("li",[e._v("A、B、C 总共有 8 个函数，4 个非虚函数，4 个虚函数")]),e._v(" "),_("li",[e._v("A 有两个虚函数 vfunc1、vfunc2 以及两个非虚函数 func1、func2；B 类继承 A 类的 vfunc2，同时覆写A类的 vfunc1，此时 B 有两个虚函数(vfunc1 和 vfunc2)；C 类继承了 B 类的 vfunc2（vfunc2 其实是 A 的），同时覆写了 vfunc1，也有两个虚函数。")]),e._v(" "),_("li",[e._v("只要一个类拥有虚函数，则就会有一个虚指针 vptr，该 vptr 指向一个虚表 vtbl，虚表 vtbl 中放的都是函数指针，指向虚函数所在的位置。可以观察到，关系图中虚表中的函数指针都指向相应的虚函数的位置，编译器也是用相同的路径调用到正确的函数，这其实就是"),_("strong",[e._v("动态绑定")]),e._v("的关键（静态绑定地址都是写死的，动态绑定会看 p 指向什么）。")]),e._v(" "),_("li",[e._v("上面的步骤写成 C 的形式就是"),_("code",[e._v("(*(p->vptr)[n])(p);")]),e._v("或"),_("code",[e._v("(* p->vptr[n])(p);")]),e._v("n 指的是要调用的虚函数在虚表中的第几个。n 在写虚函数代码的时候编译器看该虚函数第几个写的则 n 就是几。")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(647),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("换一个生活中的例子")]),e._v(" "),_("li",[e._v("我们为了让容器能够存放不同的形状，必须让它放置指针，否则不同形状在内存中的占用大小不一，容器无法存放")]),e._v(" "),_("li",[e._v("在绘制时，每个图形都各自用自己的"),_("code",[e._v("draw()")]),e._v("绘制（类似上一页的 "),_("code",[e._v("vfunc1()")]),e._v("），因此需要用虚函数实现。如果是 C，只能用代码判断是什么形状，再用对应函数绘制，这很不好，如果未来要添加新的形状，代码也要多写 if  else")]),e._v(" "),_("li",[e._v("总结一下，C++编译器看到一个函数调用，它有两个考量：\n"),_("ul",[_("li",[e._v("是静态绑定吗？（Call ×××）")]),e._v(" "),_("li",[e._v("还是动态绑定，要想动态绑定要满足三个条件：\n"),_("ul",[_("li",[e._v("第一：必须是"),_("strong",[e._v("通过指针来调用")])]),e._v(" "),_("li",[e._v("第二：该指针是"),_("strong",[e._v("向上转型")]),e._v("（up-cast）的")]),e._v(" "),_("li",[e._v("第三：调用的是"),_("strong",[e._v("虚函数")])])])])])]),e._v(" "),_("li",[e._v("这种用法被称为多态（polymorphism），可以发现，多态、虚函数、动态绑定是指的一回事，把这部分基础打牢，能很好的理解面向对象")])]),e._v(" "),_("h2",{attrs:{id:"_3-3-关于-this"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-关于-this"}},[e._v("#")]),e._v(" 3.3 关于 this")]),e._v(" "),_("h2",{attrs:{id:""}},[_("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")]),e._v(" "),_("img",{attrs:{src:a(648),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("通过对象调用一个函数，那个对象的地址就是"),_("code",[e._v("this")])]),e._v(" "),_("li",[e._v("对于"),_("code",[e._v("this")]),e._v("概念要很清晰，不然在分析继承体系的时候会搞不清谁调用谁")]),e._v(" "),_("li",[e._v("子类对象调用父类的函数，执行到"),_("code",[e._v("Serialize()")]),e._v("时会跑到子类重写的部分再跑回去，为什么会跑到这来呢，答案是动态绑定")]),e._v(" "),_("li",[_("code",[e._v("myDoc.OnFileOpen();")]),e._v("中，myDoc 在调用它，所以 myDoc 的地址就是 this，传进来之后，"),_("code",[e._v("OnFileOpen()")]),e._v("中所有的动作都是通过 this 调用的，到"),_("code",[e._v("this->Serialize()")]),e._v("时，编译器发现：\n"),_("ul",[_("li",[e._v("this 是指针")]),e._v(" "),_("li",[e._v("myDoc 是子类对象，this 指向子类对象，所以是向上转型")]),e._v(" "),_("li",[e._v("this 调用的是虚函数")])])]),e._v(" "),_("li",[e._v("于是满足动态绑定的条件，实际执行为"),_("code",[e._v("(*(this->vptr)[n])(this);")]),e._v("，编译器发现 this 指向子类，所以调用的是子类的虚函数，而不是父类的")])]),e._v(" "),_("h2",{attrs:{id:"_3-4-关于动态绑定"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-关于动态绑定"}},[e._v("#")]),e._v(" 3.4 关于动态绑定")]),e._v(" "),_("p",[_("img",{attrs:{src:a(649),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("为什么动态绑定解析成 C 语言是"),_("code",[e._v("(*(p->vptr)[n])(p);")]),e._v("或"),_("code",[e._v("(* p->vptr[n])(p);")]),e._v("呢，下面从汇编角度分析")]),e._v(" "),_("li",[e._v("a 是 A 的对象，它不是指针，调用方式是静态绑定，可以看到汇编呈现的是：call 一个地址")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(650),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("下面通过 pa 调用，pa 满足动态绑定的三个条件，可以看出，call 后面不再是固定的地址，而汇编呈现的内容等价于 C 语言的"),_("code",[e._v("(*(p->vptr)[n])(p);")]),e._v("或"),_("code",[e._v("(* p->vptr[n])(p);")])])]),e._v(" "),_("h1",{attrs:{id:"_4-const、动态分配与-new、delete"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-const、动态分配与-new、delete"}},[e._v("#")]),e._v(" 4.const、动态分配与 new、delete")]),e._v(" "),_("h2",{attrs:{id:"_4-1-谈谈-const"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-谈谈-const"}},[e._v("#")]),e._v(" 4.1 谈谈 const")]),e._v(" "),_("h2",{attrs:{id:"-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[e._v("#")]),e._v(" "),_("img",{attrs:{src:a(651),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("之前课程的例子"),_("code",[e._v("double real() const {return re;}")])]),e._v(" "),_("li",[e._v("加 const 的意图是告诉编译器，成员函数不打算改变 class 的 data，只是读，请编译器帮忙把关，看有没有违反意图")]),e._v(" "),_("li",[e._v("对象调用成员函数的时候，对象可能是 const，也可能不是，成员函数同理，于是产生了四种情况。我的数据是不能改变的，这个函数却可能改变我的数据，所以 const object 不能调用 non-const 函数")]),e._v(" "),_("li",[e._v("const也是函数签名的一部份，即可构成函数重载。")]),e._v(" "),_("li",[e._v("标准库的字符串时能共享的，四份相同的字符串会共享一个，所以其中一个人要改的时候，要单独拷贝一份修改，另外三个人继续共享原来的。使用者可能会写"),_("code",[e._v("a[5]='B'")]),e._v("，意味着 [] 有可能被用来修改数据，因此不带 const 的 [] 必须要考虑 Copy On Write 行为。考虑常量字符串，它不会改变内容，可以不必考虑 COW，所以如果能区分两个函数会很好。")]),e._v(" "),_("li",[e._v("当成员函数的 const 和 non-const 版本同时存在，const 对象只能调用 const 版本的成员函数，non-const 对象只能调用 non-const 版本的成员函数。\n"),_("ul",[_("li",[e._v("如果这条规则不存在，non-const 的字符串有可能会调用 const 的 []，这样 const 的 [] 依然要考虑 COW，不符合我们的想法")]),e._v(" "),_("li",[e._v("这条规则保证只有常量字符串才会调用 const 的 []，const 的 [] 可以放心地不必考虑 COW。")])])])]),e._v(" "),_("h2",{attrs:{id:"_4-2-关于-new、delete"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-关于-new、delete"}},[e._v("#")]),e._v(" 4.2 关于 new、delete")]),e._v(" "),_("p",[_("img",{attrs:{src:a(652),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("全部是回顾之前讲过的")]),e._v(" "),_("li",[e._v("使用 new，其实会有三个动作，依次为：分配内存、转型、构造函数；delete 有两个动作：析构函数、释放内存")]),e._v(" "),_("li",[e._v("当我们 new 一个对象或 delete 一块内存的时候，这个 new、delete 是一个 expression（表达式），不可以重载。但是他们的内部 new、delete 是 operator（操作符）可以重载。重载后可用来写内存池")]),e._v(" "),_("li",[e._v("array new 一定要搭配 array delete。")])]),e._v(" "),_("h2",{attrs:{id:"_4-3-重载-operator-new-operator-delete"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-重载-operator-new-operator-delete"}},[e._v("#")]),e._v(" 4.3 "),_("strong",[e._v("重载 operator new，operator delete")])]),e._v(" "),_("h3",{attrs:{id:"_4-3-1-全局重载-operator-new-operator-delete-operator-new-operator-delete"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-全局重载-operator-new-operator-delete-operator-new-operator-delete"}},[e._v("#")]),e._v(" 4.3.1 全局重载 ::operator new, ::operator delete, :: operator new[], ::operator delete[]")]),e._v(" "),_("p",[_("img",{attrs:{src:a(653),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[_("code",[e._v("::")]),e._v("代表全局的")]),e._v(" "),_("li",[e._v("着用这种重载要小心，它影响范围是全局。")])]),e._v(" "),_("h3",{attrs:{id:"_4-3-2-重载-member-operator-new-delete"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-重载-member-operator-new-delete"}},[e._v("#")]),e._v(" 4.3.2 重载 member operator new/delete")]),e._v(" "),_("p",[_("img",{attrs:{src:a(654),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("现在是在类里")]),e._v(" "),_("li",[e._v("delete 重载的第二个参数时是可选的，可以不写")])]),e._v(" "),_("h3",{attrs:{id:"_4-3-3-重载-member-operator-new-delete"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-3-重载-member-operator-new-delete"}},[e._v("#")]),e._v(" 4.3.3 重载 member operator new[] / delete[]")]),e._v(" "),_("p",[_("img",{attrs:{src:a(655),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("和上一页比对，只有 [] 的区别")])]),e._v(" "),_("h3",{attrs:{id:"_4-3-4-接口示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-4-接口示例"}},[e._v("#")]),e._v(" 4.3.4 接口示例")]),e._v(" "),_("p",[_("img",{attrs:{src:a(656),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("如果使用者想绕过重写，可以加全局作用域"),_("code",[e._v("Foo* pf = ::new Foo;``::delete pf;")]),e._v("（虽然很难想象什么场景下会有这种需求）")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(657),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("Foo 有 一个 int 一个 long 一个 string，int 占 4 字节，long 占 4 字节，string 里面其实是指针，占 4 字节。所以第一行显示，一个 Foo 占 12 个字节")]),e._v(" "),_("li",[e._v("如果 Foo 有虚函数，就会多一个指针，大小为 16 字节")]),e._v(" "),_("li",[_("code",[e._v("new Foo[5];")]),e._v("，12*5=60，但显示出来是 64，为什么会多出一个 4？这个 4 记录的其实是数组大小（5），这样编译器才能很快的知道，下面要调用 5 次构造或 5 次析构")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(658),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("通过测试程序可以发现，加上"),_("code",[e._v("::")]),e._v("后确实没有进入重写的部分")])]),e._v(" "),_("h2",{attrs:{id:"_4-4-重载-new-delete"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-重载-new-delete"}},[e._v("#")]),e._v(" 4.4 "),_("strong",[e._v("重载 new()，delete()")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(659),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[_("p",[e._v("这种形式叫作 placement new")])]),e._v(" "),_("li",[_("p",[e._v("使用形式："),_("code",[e._v("Foo* pf = new(300,'c') Foo;")])])]),e._v(" "),_("li",[_("p",[e._v("可以重载多个 class member operator new() 版本，但每一个版本的"),_("strong",[e._v("参数列表必须独一无二")])])]),e._v(" "),_("li",[_("p",[e._v("且参数列表的第一个参数必须为 "),_("strong",[e._v("size_t")]),e._v("，其余参数以 new 所指定的 placement arguments 为初值。出现在new(......) 小括号内的便是所谓的 placement arguments。")]),e._v(" "),_("ul",[_("li",[e._v("很合理，因为必须知道大小才能分配内存")])])]),e._v(" "),_("li",[_("p",[e._v("所以上述的使用形式小括号内虽然看到有两个参数(300，‘c’)，但其实有三个。")])]),e._v(" "),_("li",[_("p",[e._v("可以重载多个 class member operator delete() 版本，但绝不会被 delete 调用（这个 delete 是指可以被分解为两步的那个 delete）")])]),e._v(" "),_("li",[_("p",[e._v("唯一被调用的时机：只有当 new 所调用的构造函数(new 被分解的第一步)抛出异常，才会调用与 new 对应的那个重载 operator delete()，主要用来归还未能完全创建成功的对象所占用的内存。")])])]),e._v(" "),_("p",[_("img",{attrs:{src:a(660),alt:"image.png"}}),e._v(" "),_("img",{attrs:{src:a(661),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("(5) 是故意写错第一个参数的版本，会报错")]),e._v(" "),_("li",[e._v("为了测试 placement operator delete，故意在第一页抛出异常")]),e._v(" "),_("li",[e._v("下面的四个 operator delete 每个都是对应上面的一个 operator new")]),e._v(" "),_("li",[e._v("如果 operator new 调用构造函数时发生异常，应该把刚刚分配的内存释放掉才对，否则会发生内存泄漏，就在这时，对应的 operator delete 就会被调用，去释放内存")]),e._v(" "),_("li",[e._v("p1、p2、p3、p4 都是调用默认的构造函数，p5 故意调用了会抛出异常的带参数的构造函数（C++ 程序在抛出异常后就不会继续执行了，所以 p6、p7、p8 不用管），但奇怪的是，这次测试中没有调用 operator delete，之前的测试却调用了，可能和编译器有关")]),e._v(" "),_("li",[e._v("即使 operator delete 未能一一对应 operator new，也不会出现任何报错，编译器只会认为你不在乎异常，而不会强制要求你处理")])]),e._v(" "),_("p",[_("img",{attrs:{src:a(662),alt:"image.png"}})]),e._v(" "),_("ul",[_("li",[e._v("标准库重载 placement operator new 的例子")]),e._v(" "),_("li",[e._v("字符串是放到 extra 部分里，Rep 做计数器")]),e._v(" "),_("li",[e._v("他这样做可以无声无息地多分配一部分内存")])])])}),[],!1,null,null,null);t.default=v.exports},615:function(e,t,a){e.exports=a.p+"assets/img/1671777369629-ee512531-bfc1-4b6e-bdfd-cd25777fa95c.64501f17.png"},616:function(e,t,a){e.exports=a.p+"assets/img/1671778051817-4090500a-ce01-484f-a4a2-96895d942993.5321e0eb.png"},617:function(e,t,a){e.exports=a.p+"assets/img/1671778893546-f93aac0c-b1c5-4554-8988-054f2abe22b5.7cf39f83.png"},618:function(e,t,a){e.exports=a.p+"assets/img/1671779365838-e9319f9d-a95e-47a1-9802-156da2736435.08c254fa.png"},619:function(e,t,a){e.exports=a.p+"assets/img/1671779604550-e5b86753-17a1-4f38-852d-1598ce8f948c.193a538f.png"},620:function(e,t,a){e.exports=a.p+"assets/img/1671780088298-10fc4868-8e9d-4734-afad-057181aad374.a7a64371.png"},621:function(e,t,a){e.exports=a.p+"assets/img/1671780955715-80d89c1c-3cf4-4249-ad55-59b29e06f0a9.18c075c5.png"},622:function(e,t,a){e.exports=a.p+"assets/img/1671781197255-67d9c50c-2004-4ba6-bc20-4c2449a390be.8925ea32.png"},623:function(e,t,a){e.exports=a.p+"assets/img/1671781746692-5c786c41-2256-41f8-8b3e-c0fe9e1f5661.dcaac81b.png"},624:function(e,t,a){e.exports=a.p+"assets/img/1671782618632-859caed9-7539-4e5c-8582-8fd3e87c0cc1.4052452a.png"},625:function(e,t,a){e.exports=a.p+"assets/img/1671783230993-5afb0cde-6bde-4d34-9e61-428325334e70.4c1e64bd.png"},626:function(e,t,a){e.exports=a.p+"assets/img/1671783461633-d535dfa1-7e34-4e23-8a8c-f8d95fca0fd7.b5279b3d.png"},627:function(e,t,a){e.exports=a.p+"assets/img/1671783618526-1c2c3ce3-3d75-4221-b242-40f2adad6ebc.336d9adf.png"},628:function(e,t,a){e.exports=a.p+"assets/img/1671783823862-81c333a6-e6fc-45db-ae03-ad073b7e5bc5.074f0ed3.png"},629:function(e,t,a){e.exports=a.p+"assets/img/1671783929495-1125aabb-a26a-455b-a18d-70358e867c6b.a6186361.png"},630:function(e,t,a){e.exports=a.p+"assets/img/1671784440368-693191cf-a2f1-408c-884a-6686988807e1.19b9276d.png"},631:function(e,t,a){e.exports=a.p+"assets/img/1671785224676-9ff3f2e5-eb58-4c4a-9fec-34d6191c0256.0b97aa75.png"},632:function(e,t,a){e.exports=a.p+"assets/img/1671785578133-91153d6e-17fb-4e35-94c3-43efe7f42c31.637d1208.png"},633:function(e,t,a){e.exports=a.p+"assets/img/1671785770195-bcb8c28c-aa54-4c2c-b646-1da88a83f993.93b00e48.png"},634:function(e,t,a){e.exports=a.p+"assets/img/1671786089480-699625b0-a7d7-44d4-b709-7614cf7dc809.41233b09.png"},635:function(e,t,a){e.exports=a.p+"assets/img/1671786483361-fd6ae76a-4f5e-4edb-911c-4a177a38f618.db5292ad.png"},636:function(e,t,a){e.exports=a.p+"assets/img/1671786609417-da256a15-1a4f-4ae4-8966-389dedca5bcf.cceebfd6.png"},637:function(e,t,a){e.exports=a.p+"assets/img/1671786927776-5dc2338c-abd8-4b1e-93a9-9079356e3621.e5657e78.png"},638:function(e,t,a){e.exports=a.p+"assets/img/1671862090075-283b4f66-117c-4a39-9b9a-ad8d67dee4ce.f2fa9c10.png"},639:function(e,t,a){e.exports=a.p+"assets/img/1671863038015-c0db01b8-816f-4bf1-b5fb-71f6ab641167.7bc159c7.png"},640:function(e,t,a){e.exports=a.p+"assets/img/1671863493453-106b53b8-fe9c-46df-bdd8-c15650b1253f.fe1ef7d0.png"},641:function(e,t,a){e.exports=a.p+"assets/img/1671863990476-3a0473e5-5439-418b-9bf0-5a0325e65a74.6f02a3d1.png"},642:function(e,t,a){e.exports=a.p+"assets/img/1671864850058-4e290490-15d6-49c4-99e4-1791e860d203.306b19cb.png"},643:function(e,t,a){e.exports=a.p+"assets/img/1671865047317-49bb4b48-fc24-4069-8f20-1ce8e10449df.d8559400.png"},644:function(e,t,a){e.exports=a.p+"assets/img/1671865734953-3a8ba648-a134-4fe5-aa91-48cc4e6093ce.b5bab1cd.png"},645:function(e,t,a){e.exports=a.p+"assets/img/1671865902339-4706422e-ce6d-46c8-8add-4e3bf91210e9.84a41bd4.png"},646:function(e,t,a){e.exports=a.p+"assets/img/1671866155742-9b50fd9e-4394-4625-acf7-773177107c1d.c6bc6b52.png"},647:function(e,t,a){e.exports=a.p+"assets/img/1671867104100-f392b3f9-21c2-4b6e-86cb-80bcca52d853.8cc9bc7d.png"},648:function(e,t,a){e.exports=a.p+"assets/img/1671867999023-7afb44a3-a4e8-4dac-a975-0f3a04a388c7.5ff4e927.png"},649:function(e,t,a){e.exports=a.p+"assets/img/1671868932730-c2e1fa01-dbd5-4b93-853c-5155cb5f5e4a.9b7990aa.png"},650:function(e,t,a){e.exports=a.p+"assets/img/1671869024070-86eba877-7bd7-441f-be63-cdc6c53fb9bc.3405e9ac.png"},651:function(e,t,a){e.exports=a.p+"assets/img/1671869591577-1cc10ce8-b8de-4746-bba2-78f757079f6f.99ff2fac.png"},652:function(e,t,a){e.exports=a.p+"assets/img/1671871073889-fd9fe3fc-25fb-4ca0-866e-3fa60f767731.9ebf841a.png"},653:function(e,t,a){e.exports=a.p+"assets/img/1671871274958-2567b7ef-ad93-4308-91c7-278df980c40e.ce8591a5.png"},654:function(e,t,a){e.exports=a.p+"assets/img/1671871415119-c1af1bb0-a353-4549-96fd-489353d3ed40.34eb8198.png"},655:function(e,t,a){e.exports=a.p+"assets/img/1671871567384-78b617b4-de6d-4a43-85d8-9b75352d2217.a316544e.png"},656:function(e,t,a){e.exports=a.p+"assets/img/1671871781938-95654e47-9cd6-4d98-a41c-a8d69c3e9fc1.8558d44a.png"},657:function(e,t,a){e.exports=a.p+"assets/img/1671871977991-995e553e-f174-41aa-884b-4a716ad36e41.d3586c99.png"},658:function(e,t,a){e.exports=a.p+"assets/img/1671872542428-9e7eae06-3d1f-4b8a-ab42-cf5ab410894d.efc0061f.png"},659:function(e,t,a){e.exports=a.p+"assets/img/1671872640391-3f07df1b-8cdf-4a1a-ba42-0f1e4a83c06a.2cbb50d6.png"},660:function(e,t,a){e.exports=a.p+"assets/img/1671872732997-c9be5cdb-3ffc-4bb3-a789-fccfa40f349b.7e94f41a.png"},661:function(e,t,a){e.exports=a.p+"assets/img/1671872759748-f65f69fa-d608-45d5-b41e-126a875bfea1.351e2b23.png"},662:function(e,t,a){e.exports=a.p+"assets/img/1671873705772-6f73bcc9-afed-4b3e-b07e-71a482e13be8.cb5cf2dc.png"}}]);