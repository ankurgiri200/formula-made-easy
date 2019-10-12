

// Please replace the skill id with ur particular skill id and please go though the comments to know the explanation of the particular part of code..


let speechOutput;
let reprompt;
let welcomeOutput = "Hello, in this skill you can clear your doubt, and learn some basic formula. this skill is divided in sections like : Trigonometry, Differenciation, Integration, Three diamention geometry. for now you can revise from these sections. if you want to revise formula from mentioned sections please ask for that section, otherwise please tell me your doubt.";
let welcomeReprompt = "you can say something like : larn from Integration, or ask for doubt like what is sin inverse x + cos inverse x.";
// 2. Skill Code =======================================================================================================
"use strict";
const Alexa = require('alexa-sdk');
const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).
speechOutput = 'Welcome to formula made eas';
const handlers = {
	'LaunchRequest': function () {
		this.emit(':ask', welcomeOutput, welcomeReprompt);
	},
	'AMAZON.HelpIntent': function () {
		speechOutput = 'this skill is based on maths formula. if you are having any doubt from maths ask to me. and if you want to learn some formula , please say learn from *SECTION NAME*.';
		
		this.emit(':ask', speechOutput);
	},
   'AMAZON.CancelIntent': function () {
		speechOutput = 'Thanks for using. Further if you are having any doubt , invoke me.';
		this.emit(':tell', speechOutput);
	},
   'AMAZON.StopIntent': function () {
		speechOutput = 'Ok';
		this.emit(':tell', speechOutput);
   },
   'SessionEndedRequest': function () {
		speechOutput = '';
		//this.emit(':saveState', true);//uncomment to save attributes to db on session end
		this.emit(':tell', speechOutput);
   },
	'AMAZON.NavigateHomeIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "you have been navigated to home. ask if you are having any doubt , or want to learn.";
		this.emit(":ask", speechOutput, speechOutput);
    },
    'yesIntent': function () {
		speechOutput = 'Ok, what do you want to know about..';
		this.emit(':ask', speechOutput);
    },
	'doubtIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience
	let questionSlot = resolveCanonical(this.event.request.intent.slots.question);
		console.log('user requested question:' + questionSlot);

		//Your custom intent handling goes here
		var questions = {
	        'l hospitals rule' : {
		        'ans' : 'l hospitals rule says that, if you are getting 0 by 0 form then, limit x tends to A f of x by phi of x will be equals to f desh A by phi desh A. if again you are getting f desh A equals to 0 and phi desh A equals to 0, then it will be f double desh A by phi double desh A.',
		    },
		    'mean value theorem' : {
		        'ans' : 'Mean Value Theorem states that , if a function f x is differenciable in an interval A comma b , then there exists at least one value of x  in the interval A comma b , such that f desh x1 equals to ,f of b minus f of A whole divided by B minus A.',
		    },
		    'rolles theorem' : {
		        'ans' : 'if a function f x is differenciable in an interval A comma b , and f of A equals to f of b , then there exists at least one value x1 of x in the interval A comma b , such that f desh of x1 equals to 0.',
		    },
		    'monotonic function' : {
		        'ans' : 'f x is an increasing function at x equals to a , when  f desh a  is positive , and a decreasing function when f desh a is negative. a function f x  is called a monotonic increasing function in an interval , if it is an increasing function in that interval. and is called a monotonic decreasing function in an interval , if it is a decreasing function in that interval.',
		    },
		    'parametric form of rectangular hyperbola' : {
		        'ans' : 'parametric representation form of rectangular hyperbola , of a point P , on x y  equals to c^2 is , ct , comma , c divided by t.',
		    },
		    'standard equation of rectangular hyperbola' : {
		        'ans' : 'standard equation of rectangular hyperbola is , x y = c^2.',
		    },
		    'parametric form of hyperbola' : {
		        'ans' : 'parametric form of representation of a point P , on the hyperbola is , A sec thita , comma , b tan thita.,',
		    },
		    'standard equation of hyperbola' : {
		        'ans' : 'standard equation of hyperbola is , x^2 divided by A^2 , minus y^2 divided by b^2 , minus 1 = 0.',
		    },
		    'parametric form of ellipse' : {
		        'ans' : 'parametric form of representation of a point on the ellipse, x^2 divided by a^2 , plus y^2 divided by b^2 , = 1 , is P A cos thita , comma , B sin thita.',
		    },
		    'length of letus ractum of ellipse' : {
		        'ans' : 'length of letus ractum of ellipse is , 2b^2 divided by , A,',
		    },
		    'length of letus ractum of parabola' : {
		        'ans' : 'length of letus ractum of parabola is , 4R.',
		    },
		    'standard equation of ellipse' : {
		        'ans' : 'standard equation of ellipse is , x^2 divided by a^2 , plus y^2 divided by b^2 , minus 1, = 0 ',
		    },
		    'parametric form of parabola' : {
		        'ans' : 'parametric form of representation of a point on the parabola , y^2 = 4A X , is P (A t^2 , 2A t).',
		    },
		    'equation of parabola' : {
		        'ans' : 'standard equation of parabola is , y^2 = 4A X. where x-axis is the axis of the parabola , y-axis is the tangent at the vertex. vertex of this parabola is , A(0,0). focus is , S(A,0) , and directrix is , x+a=0.',
		    },
		    'condition for line to touch the circle' : {
		        'ans' : 'condition for the line , y=m x + c , to touch the circle , x^2 + y^2 = a^2 is , c^2 = a^2 , (1 + m^2).',
		    },
		    'equation of the tangent to the circle' : {
		        'ans' : 'equation of the tangent to the circle , x^2 + y^2 + 2G x + 2 f y + c , = , 0 at , (x1,y1) is , x x1 + y y1 + g,(x+x1) + f,(y+y1) + c , = 0.',
		    },
		    'general equation to the circle' : {
		        'ans' : 'general equation to the circle is , x^2 + y^2 + 2G x + 2 f y + c , = , 0.',
		    },
		    'equation to the circle' : {
		        'ans' : 'the equation to the circle having its centre at O, (h,k) , and radius , r is , whole^2 of , x minus h , plus whole^2 of y minus k , = r^2.',
		    },
		    'length of perpendicular' : {
		        'ans' : 'length of perpendicular from the point (x1,y1) , to the line , a x + b y + c = o , is , whole mod of , a x1 + b y1 + c divided by^2 root of a^2 + b^2.',
		    },
		    'normal form of a straight line' : {
		        'ans' : 'ithe perpendicular from the origin to the line is of length , p and makes an angle alppha , with the positive direction of the x-axis , the equation of the line in normal form is , x cos alpha + y sin alpha , = P.',
		    },
		    'intercept form of a straight line' : {
		        'ans' : 'the line making intercept , a and , b on the x , and , y axis is , x divided by a , + y divided by b , = 1.',
		    },
		    'slope form of a sraight line' : {
		        'ans' : 'if tan thita , = m , the equation is , y, = m x + c.',
		    },
		    'general form of a staight line' : {
		        'ans' : 'general form of the straight line is , a x + b y + c , = 0.',
		    },
		    'condition for three points to be collinear' : {
		        'ans' : 'first condition is that, area of triangle formed by three points is zero, second is determinant of , x1 y1 1, x2 y2 2 , x3 y3 3, is, = 0. and third is find the distance between the points taken two at a time. if the distance between a pair of points is equals to the sum or difference between the other two pairs of points , then the three points lie on a line .',
		    },
		    'area of the triangle' : {
		        'ans' : 'the area of the triangle  A B C is the numerical value is , 1 by 2 , (x1,(y2 minus y3),+x2 , (y3 minus y1) , + x3, (y1 minus y2))',
		    },
		    'incentre of the triangle' : {
		        'ans' : 'the incentre of the triangle A B C is , ( a x1 + b x2 + c x3, whole divided by , a + b + c ) , comma , (a y1 + b y2 + c y3 , whole divided by , a+b+c). where BC = a , CA= b , AB = c.',
		    },
		    'centroid of the triangle' : {
		        'ans' : 'the centroid of the triangle A B C is , ( x1 + x2 + x3, whole  divided by 3) , comma, (y1 + y2 + y3 , whole divided by 3).',
		    },
		    'two tan inverse x' : {
		        'ans' : 'two tan inverse x = , sin inverse , (2X up on , 1 + x^2). which is also = , cos inverse ( 1 minus x^2 up on , 1 + x^2) , and in terms of tan it will be , tan inverse ( 2X up on,  1 minus x^2).',
		    },
		    'cos inverse x minus cos inverse y' : {
		        'ans' : 'cos inverse x minus cos inverse y , = cos inverse , ( x y +^2 root of 1 minus x^2 , in to^2 root of , 1 minus y^2). ',
		    },
		    'sin inverse x minus sin inverse y' : {
		        'ans' : 'sin inverse x minus sin inverse y = , sin inverse , ( x into^2 root of 1 minus y^2 , minus , y , in to ,^2 root of , 1 minus x^2).',
		    },
		    'cos inverse x plus cos inverse y' : {
		        'ans' : 'cos inverse x plus cos inverse y , = cos inverse , ( x y minus^2 root of 1 minus x^2 , in to^2 root of , 1 minus y^2).',
		    },
		    'sin inverse x plus sin inverse y' : {
		        'ans' : 'sin inverse x plus sin inverse y = , sin inverse , ( x into^2 root of 1 minus y^2 , plus , y , in to ,^2 root of , 1 minus x^2).',
		    },
		    'tan inverse x minus tan inverse y' : {
		        'ans' : 'tan inverse x minus tan inverse y, = tan inverse , (x minus y , whole upon 1 + x y)',
		    },
		    'tan inverse x plus tan inverse y' : {
		        'ans' : 'if x into y is smaller than 1 , then tan inverse x plus tan inverse y , will be equals to tan inverse , (x + y , whole upon 1 minus x y). if x into y is greater than 1 , then tan inverse x plus tan inverse y , will be equals to pi + tan inverse , (x + y , whole upon 1 minus x y).  ',
		    },
		    'cosec inverse x plus sec inverse x' : {
		        'ans' : 'cosec inverse x plus sec inverse x ,= , pi divided by 2.',
		    },
		    'tan inverse x plus cot inverse x' : {
		        'ans' : 'tan inverse x plus cot inverse x,= , pi divided by 2.',
		    },
		    'sin inverse x plus cos inverse x' : {
		        'ans' : 'sin inverse x plus cos inverse x , = , pi divided by 2.',
		    },
		    'sin a cos b' : {
		        'ans' : 'sin A cos B ,= ,1 by 2 , (sin (A + B) , + sin (A minus B)).',
		    },
		    'cos a cos b' : {
		        'ans' : 'cso A cos B ,= ,1 by 2 , (cos (A + B) , + cos (A minus B))',
		    },
		    'sin a sin b' : {
		        'ans' : 'sin A sin B ,= ,1 by 2 , (cos (A minus B) , minus cos (A + B))',
		    },
		    'cos a minus cos b' : {
		        'ans' : 'cos A minus cos B = , 2 sin , A+B divided by 2 , into , sin , B minus A divided by 2.',
		    },
		    'cos a plus cos b' : {
		        'ans' : 'cos A + cos B , = , 2 cos , A+B divided by 2 , into , cos , A minus B divided by 2.',
		    },
		    'sin a minus sin b' : {
		        'ans' : 'sin A minus sin B ,= 2 cos , A+B divided by 2 , into , sin , A minus B divided by 2.',
		    },
		    'sin a plus sin b' : {
		        'ans' : 'sin A + sin B =, 2 sin , A+B divided by 2 , into , cos , A minus B divided by 2.',
		    },
		    'tan three a' : {
		        'ans' : 'tan 3A=, 3 tan A minus tan cube A, whole divided by , 1 minus , 3 tan^2 A.',
		    },
		    'cos three a' : {
		        'ans' : 'cos 3A =, 4 cos cube A , minus , 3 cos A.',
		    },
		    'sin three a' : {
		        'ans' : 'sin 3A =, 3 sin A , minus , 4 sin cube A.',
		    },
		    'tan two a' : {
		        'ans' : 'tan 2A =, 2 tan A, whole divided by , 1 + tan^2 A',
		    },
		    'cos two a' : {
		        'ans' : 'cos 2A =, cos^2 A , minus , sin^2 A , which is also equals to , 1 minus, 2 sin^2 A . and it is also equals to , 2 cos^2 A , minus , 1.',
		    },
		    'sin two a' : {
		        'ans' : 'sin 2A=, 2 sin A , into cos A. which is also equals to , 2 tan A , whole divded by , 1 + tan^2 A.',
		    },
		    'tan a minus b' : {
		        'ans' : 'tan (A minus B) = , (tan A minus tan B), whole divided by , 1 + tan A , into tan B.',
		    },
		    'tan a plus b' : {
		        'ans' : 'tan (A + B) = , (tan A + tan B), whole divided by , 1 minus tan A , into tan B.',
		    },
		    'cos a minus b' : {
		        'ans' : 'cos A minus B =, cos A , into cos B , + sin A , into sin B.',
		    },
		    'cos a plus b' : {
		        'ans' : 'cos A + B =, cos A , into cos B , minus sin A , into sin B.',
		    },
		    'sin a minus b' : {
		        'ans' : 'sin A minus B =, sin A , into cos B , minus cos A , into sin B.',
		    },
		    'sin a plus b' : {
		        'ans' : 'sin A + B =, sin A , into cos B , + cos A , into sin B.',
		    },
		    'a^2 minus b^2' : {
		        'ans' : 'A^2 minus B^2 =, (A minus B) , into , (A+B).',
		    },
		    'a plus b whole^2' : {
		        'ans' : 'A plus B whole^2 = , A^2 , + B^2 , + 2 A B.',
		    },
		    'skew symmetric matrix' : {
		        'ans' : 'a matrix is said to be skew symmetric matrix , if A transpose =, minus A.',
		    },
		    'symmetric matrix' : {
		        'ans' : 'A matrix is said to be symmetric matrix , if A transpose =, A.',
		    },
		    'a into b whole transpose' : {
		        'ans' : 'A B whole transpose =, B transpose into , A transpose.',
		    },
		    'a plus b whole transpose' : {
		        'ans' : '(A + B), whole transpose , =, A transpose , + B transpose.',
		    },
		    'a transpose whole transpose' : {
		        'ans' : 'whole transpose of A transpose is , = , A.',
		    },
		    'matrix' : {
		        'ans' : 'A set of numbers arranged in a rectangle of m rows and n columns is called a matrix.',
		    },
		    'binomial theorem' : {
		        'ans' : '(x + a) whole power n , = , x^n , + , n c 1, into , x power , n^1 , into a , + , n c 2 , into , x^n minus 2 , into , a^2 +....+ , a^n . where n is a positive integer .(r+1)eth term is called the general tern aand is usually denoted by , U base r+1.',
		    },
		    'n c r' : {
		        'ans' : 'n c r =, n p r divided by r factorial. which is also equals to , n factorial , divided by , n minus r whole factorial , into , r factorial.',
		    },
		    'combination' : {
		        'ans' : 'A selection of r objects out of n different objects without reference to the order in which the objects stand in it, is called the combination of n things taken r at a time and the number of combinations is denoted by n c r. n c r is also =, n c n minus r.',
		    },
		    'n p r' : {
		        'ans' : 'n p r =,  n into , ( n minus 1) dot dot dot , (n minus , r + 1). it is also =, n factorial , divided by , whole factorial of , n minus r. n p r is also =, n minus 1 p r , + r into , n minus 1 p r minus 1.',
		    },
		    'permutation' : {
		        'ans' : 'A permutation is an arrangement , the number of ways of arranging n given things taken r at a time is dinoted by the symbol n p r.',
		    },
		    'n eth term of harmonic progression' : {
		        'ans' : 'nth term of harmonic progression is given by , 1 divided by , a + , (n minus 1), into d.',
		    },
		    'harmonic progression' : {
		        'ans' : 'A set of terms is said to be in harmonic progression , when their reciprocals are in arithmetic progression. the general form of a harmonic progression is , 1 divided by , a , comma , 1 divided by a+d, comma, 1 divided by a+2d...and so on.',
		    },
		    'sum of n terms of the g.p.' : {
		        'ans' : 'sum of n terms of the g.p. is given by , a into , (1 minus , r^n) , whole divided by , 1 minus r. where r is smaller than 1.',
		    },
		    'n eth term of the g.p.' : {
		        'ans' : 'nth term of the g.p. is given by , a into , r^n minus 1.',
		    },
		    'geometric progression' : {
		        'ans' : 'if the terms of a series increse or decrease by a common ratio , the series is called a geometric progression. the general form of a geometric progression is denoted by G.P. is , a , comma , a into r , comma , a into r power 2 , comma...and so on.',
		    },
		    'sum of n terms of an a.p.' : {
		        'ans' : 'sum of n terms of an a.p. is given by , n by 2, into (2a , + , (n minus 1), into d), or it is also =, n by 2 , into,(l+a), where l is the nth term.',
		    },
		    'n eth term of a.p.' : {
		        'ans' : 'nth term of a.p. is given by , a + , ( n minus 1), into d.',
		    },
		    'arithmetic progression' : {
		        'ans' : 'if the terms of a series successively increase or decrease by a constant quantity , the series is called an arithmetic progression. the constant quantity is called the common difference. the general form of an arithmetics progression is denoted by A.P. is a , comma , a+d, comma , a + 2d , comma...and so on',
		    },
		    'product of roots' : {
		        'ans' : 'product of roots alpha into bita ,=,c divided by a.',
		    },
		    'sum of roots' : {
		        'ans' : 'sum of roots , alpha + bita =, minus b , divided by a.',
		    },
		    'omega cube' : {
		        'ans' : 'omega cube , = 1.',
		    },
		    'one plus omega plus omega^2' : {
		        'ans' : 'one plus omega plus omega^2 =, 0.',
		    },
		    'omega into omega^2' : {
		        'ans' : 'omega into omega^2 =, 1.',
		    },
		    'roots of quadratic equation' : {
		        'ans' : 'roots of quadratic equation , A x , + B x + C are , (minus B, + minus ,^2 root of , B^2 minus , 4A C) , whole divided by , 2A.',
		    },
		};
		
	
		    
		    
		    var question = questionSlot.toLowerCase();
		    
		    if(questionSlot && questions[question])
		    {
		       // var audio = '';
		        var reply = 'ans'; //default pitch
		        
		        
		       var audioSrc = questions[question][reply];
		        
		        speechOutput = audioSrc + '. do you have more doubt.';
		      
		    } 
		    
		    else 
		    {
		        speechOutput = 'Sorry, I do not know that. Please try to say some other similar words. if you are not getting right, please e-mail to :- itsamanpatel0204.bld@gmail.com . Thankyou';
		      
		    }
		    
		    this.emit(":ask", speechOutput);
    },
	'learnIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience

		let sectionSlot = resolveCanonical(this.event.request.intent.slots.section);
		console.log('user requested section:' + sectionSlot);

	var sections = {
	        'three diamentional coordinate geometry' : {
		        'ans' : 'In 3D geometry	basic concept are :-1) Direction cosines of a line , are the cosines of the angles , made by the line , with the positive directions of the coordinate axes. If l , m , n are the direction cosines of a line , then l2 , +, m2 , + , n2 , =, 1. 2) Direction ratios of a line , are the numbers , which are proportional to the direction cosines of a line. If l , m , n , are the direction cosines , and a , b , c are the direction ratios of a line , then , l = , a , divided bv , square root of a^2 , + , b^2 , + , c^2 , m = , b , divided bv , square root of , a^2 , + , b^2 , + , c^2 , n = , c , divided bv , square root of , a^2 , + , b^2 , + , c^2 , 3) Angle between skew lines , is the angle between two intersecting lines , drawn from any point (preferably through the origin) , parallel to each of the skew lines. 4) If l1 , m1 , n1 , and l2 , m2 , n2  ,are the direction cosines of two lines; and thita is the acute angle , between the two lines; then , cos-thita = |l1l2 , +  ,m1m2  ,+  ,n1n2 |. 5) If a1 , b1 , c1  ,and a2 , b2 , c2  ,are the direction ratios of two lines , and thita is the acute angle , between the two lines; then , cos-thita= , mod of , a1a2 ,+ ,b1b2 ,+ ,c1c2 , whole divided by , square root , a1^2 ,+ ,b1^2 ,+ ,c1^2 , into , square root of , a2^2 ,+ ,b2^2 ,+ ,c2^2. 6) Vector equation of a line , that passes through the given point , whose position vector is a , vector and parallel to a given vector , b vector , is , r vector = , a vector  ,+ , lambda into  ,b vector. 7) Equation of a line  ,through a point , (x1 , y1 , z1) , and having direction cosines  ,l , m , n is , x minus  ,x1  , divided by  , l , =  , y minus  ,y1  , divided by  , m , = , z minus  ,z1  , divided by  , n , 8) The vector equation of a line , which passes through two points  ,whose position vectors are , a vector  ,and b vector , is , r vector , =  ,a , + , lambda , into ,(b vector ,minus ,a vector).',
		    },
	        'vector algebra' : {
		        'ans' : 'Important formulas that comes under vector algebra are :- 1)Position vector of a point , P ,(x , y , z) , is given as , r vector ,=  ,x i cap , + , y j cap ,+ , z k cap , and its magnitude given by , square root of  ,x^2  ,+  ,y^2 , + , z^2. 2) The magnitude  ,(r) , direction ratios , (a , b , c) , and , direction cosines , (l , m , n) , of any vector are related as:- l= ,a divided by , r , m= ,b divided by , r , n= ,c divided by , r. 3)The vector sum of the three sides , of a triangle , taken in order is , 0 vector. 4) For a given vector , a vector , the vector a cap , = , a , vector  , divided by  , mod of  , a vector  , gives the unit vector , in the direction of  , a vector. 5) The position vector of a point , R dividing a line segment , joining the points , P  ,and Q , whose position vectors are , a vector , and  ,b vector respectively , in the ratio , m : n  , then internally is given by  , n into  , a vector ,+ ,m into , b vector , whole divided by  , m+n. and externally is given by  , m , into , b vector , minus ,n into  , a vector , whole divided by , m minus , n. 6) The scalar product of two given vectors , a and , b ,  having angle , θ , between them is defined as :- a , vector into , b vector = , mod of , a vector , into , mod of b vector , into cos thita. 7) If θ is the angle , between two vectors , a and , b  , then their cross product is given as :- a , vector cross , b vector = , mod of , a vector , into , mod of b vector , into sin thita',
		    },
	        'integration' : {
		        'ans' : 'In integration Some standard integrals are :- 1) integration of  , x^n , dx , = , x^n+1 divided by , n+1 ,+ , c  , when n , is not = ,1. particularly , integration of dx ,= , x , + ,c. 2) integration of cos x dx= , sin x  , +  ,c. 3) integration of sin x dx = , minus , cos x  ,+ ,c. 4) integration of sec^2 x dx , = , tan x ,+ , c. 5) integration of cosec^2 x dx ,= , minus ,cot x , + ,c. 6) integration of sec x  , into , tan x , dx ,= , sec x  ,+ ,c. 7)  integration of cosec x  , into  , cot x , dx ,= , sec x ,+ ,c. 8) integration of 1 by square root of  , 1  , minus ,x^2 = , sin  , inverse x , + , c. which is also = , minus of , cos inverse , x ,+ ,c. 9) integration of 1 by 1+x^2 ,= ,tan inverse ,x ,+.c. which is also = , minus of ,cot inverse  , x ,+ ,c. 10)  integration of e^x  , dx ,= , e^x ,+ ,c. 11) integration of  ,a^x dx ,= , a^x divided by , log ,a ,+ ,c. 12) integration of  , 1 by  ,x into , square root of ,x^2 , minus ,1 ,= ,sec inverse , x ,+ ,c. which is also = ,minus ,cosec inverse , x ,+ ,c. 13) integeration of , 1 by x , dx ,= , log x ,+ ,c.',
		    },
		    'differenciation' : {
		        'ans' : 'In differenciation , formula are  , 1) the derivative of a constant function is always equals to zero. 2) d y by d x = , d y by dt  , whole upon  , d x by d t. and here are some basic formula  , 1) derivative of  , x power n , where n is a natural number  , is n into , x power , n minus 1. 2) e power x = , e power x. 3) log x = , 1 by x. 4) sin x = , cos x. 5) cos x = , minus , sin x. 6) tan x = , sec^2  , x. 7) cosec x = , minus  , cosec x into  , cot x. 8) sec x = , sec x into , tan x. 9) cot x= , minus  , cosec^2 x. 10) sin inverse= , 1 upon ,^2 root of  , 1 minus , x^2. 11) cos inverse= ,minus  , 1 upon ,^2 root of  , 1 minus , x^2. 12) tan inverse= , 1 upon , 1 + , x^2.',
		    },
	        'probability' : {
		        'ans' : 'The salient features of the chapter are :- 1) The conditional probability of an event E, given the occurrence of the event F is given by , P(E by F) = , P(, E intersection , F) , divided by , P (F) . where , P(F) , is not =, 0. 2) P(( , E union , F) by G) , = ,	P (E by G) , + , P ( F by G) , minus , P (( E intersection , F , by G).',
		    },
	        'conic section' : {
		        'ans' : 'In conic section , there comes four part of it, 1) parabola , 2) ellipse , 3) hyperbola , 4) circle. The Main facts about the parabola , whose equation is , y^2, = , 4 a x , are :- axis will be , y , = , 0 . equation of directrix is , x + , a = , 0 . focus is , (a , comma , 0). vertex is ,  (0 , comma , 0). and the Length of Latus-rectum is , 4a. ',
		    },
	        'trigonometry' : {
		        'ans' : 'In trigonometry the most formulas that are used in problems are  , 1) sin A + B = , sin A  , into cos B  , + cos A  , into sin B. 2) sin A minus B = , sin A  , into cos B  , minus cos A  , into sin B. 3) cos A + B = , cos A  , into cos B  , minus sin A  , into sin B. 4) cos A minus B = , cos A  , into cos B  , + sin A  , into sin B. 5) tan (A + B) =  , (tan A + tan B) , whole divided by  , 1 minus tan A  , into tan B. 6) tan (A minus B) =  , (tan A minus tan B) , whole divided by  , 1 + tan A  , into tan B. 7) sin 2A= , 2 sin A  , into cos A. which is also equals to  , 2 tan A  , whole divided by  , 1 + tan^2 A. 8) cos 2A = , cos^2 A  , minus  , sin^2 A  , which is also equals to  , 1 minus , 2 sin^2 A . and it is also equals to  , 2 cos^2 A  , minus  , 1. 9) tan 2A = , 2 tan A , whole divided by  , 1 + tan^2 A. 10) sin 3A = , 3 sin A  , minus  , 4 sin cube A. 11) cos 3A = , 4 cos cube A  , minus  , 3 cos A. 12) tan 3A= , 3 tan A minus tan cube A , whole divided by  , 1 minus  , 3 tan^2 A. 13) sin A + sin B = , 2 sin  , A+B divided by 2  , into  , cos  , A minus B divided by 2. 14) sin A minus sin B  ,= 2 cos  , A+B divided by 2  , into  , sin  , A minus B divided by 2. 15) cos A + cos B  , =  , 2 cos  , A+B divided by 2  , into  , cos  , A minus B divided by 2. 16) cos A minus cos B =  , 2 sin  , A+B divided by 2  , into  , sin  , B minus A divided by 2. 17) sin A sin B  ,=  ,1 by 2  , (cos (A minus B)  , minus cos (A + B)). 18) cos A cos B  ,=  ,1 by 2  , (cos (A + B)  , + cos (A minus B)). 19) sin A cos B  ,=  ,1 by 2  , (sin (A + B)  , + sin (A minus B)). 20) sin inverse x plus cos inverse x  , =  , pi divided by 2. 21) tan inverse x plus cot inverse x ,=  , pi divided by 2. 22) cosec inverse x plus sec inverse x  ,=  , pi divided by 2. 23) if x into y is smaller than 1  , then tan inverse x plus tan inverse y  , will be equals to tan inverse  , (x + y  , whole upon 1 minus x y). if x into y is greater than 1  , then tan inverse x plus tan inverse y  , will be equals to pi + tan inverse  , (x + y  , whole upon 1 minus x y). 24) tan inverse x minus tan inverse y , = tan inverse  , (x minus y  , whole upon 1 + x y). 25) sin inverse x plus sin inverse y =  , sin inverse  , ( x into^2 root of 1 minus y^2  , plus  , y  , in to  ,^2 root of  , 1 minus x^2). 26) cos inverse x plus cos inverse y  , = cos inverse  , ( x y minus^2 root of 1 minus x^2  , in to^2 root of  , 1 minus y^2). 27) sin inverse x minus sin inverse y =  , sin inverse  , ( x into^2 root of 1 minus y^2  , minus  , y  , in to  ,^2 root of  , 1 minus x^2). 28) cos inverse x minus cos inverse y  , = cos inverse  , ( x y +^2 root of 1 minus x^2  , in to^2 root of  , 1 minus y^2). 29) two tan inverse x =  , sin inverse  , (2X up on  , 1 + x^2). which is also =  , cos inverse ( 1 minus x^2 up on  , 1 + x^2)  , and in terms of tan it will be  , tan inverse ( 2X up on ,  1 minus x^2).',
		    },
	        'algebra' : {
		        'ans' : 'Formuas that comes under algebra are :- 1) (a+b) whole^2 , = , a^2 + , b^2 + , 2 a b. 2) (a-b) whole^2 , = , a^2 + , b^2 minus , 2 a b. 3) (a-b) whole^3 , = , a^3 , minus , b^3 , minus 3 a b ,into , (a minus b). 4) a^2 minus , b^2 =, (a+b) , into , (a minus , b). 5) (a+b+c), whole^2 , = , a^2 , + b^2 + , c^2 , + , 2 a b , + , 2 b c , + , 2 c a. 6) . (a + b) , whole^3 = , a^3 , + , b^3 , + , 3 a b , into ,(a , + b). 7) a^3 , + , b^3 , = ,(a , + b) whole^3 , minus , 3 a b , into,(a , + b). 8) a^3 , minus , b^3 , = , (a , minus b) whole^3 , + , 3 a b , into ,(a , minus , b). which is also equals to , (a , minus , b) , into ,(a^2 , + , a b , + , b^2). ',
		    },
		    
		}
		
		    
		    
		    var section = sectionSlot.toLowerCase();
		    
		    if(sectionSlot && sections[section])
		    {
		       // var audio = '';
		        var reply = 'ans'; //default pitch
		        
		        
		       var audioSrc = sections[section][reply];
		        
		        speechOutput = audioSrc +'. do you want to learn more.';
		      
		    } 
		    
		    else 
		    {
		        speechOutput = 'Sorry , I do not know that. Please try to say some other similar words. if you are not getting right , please e-mail to :- ankurgiri200@gmail.com . Thankyou';
		      
		    }
		    
		    this.emit(":ask", speechOutput);
    },	
	'Unhandled': function () {
        speechOutput = "The skill didn't quite understand what you wanted.  Do you want to try something else?";
        this.emit(':ask', speechOutput, speechOutput);
    }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
	//alexa.dynamoDBTableName = 'DYNAMODB_TABLE_NAME'; //uncomment this line to save attributes to DB
    alexa.execute();
};

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function resolveCanonical(slot){
	//this function looks at the entity resolution part of request and returns the slot value if a synonyms is provided
	let canonical;
    try{
		canonical = slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
	}catch(err){
	    console.log(err.message);
	    canonical = slot.value;
	};
	return canonical;
};

function delegateSlotCollection(){
  console.log("in delegateSlotCollection");
  console.log("current dialogState: "+this.event.request.dialogState);
    if (this.event.request.dialogState === "STARTED") {
      console.log("in Beginning");
	  let updatedIntent= null;
	  // updatedIntent=this.event.request.intent;
      //optionally pre-fill slots: update the intent object with slot values for which
      //you have defaults, then return Dialog.Delegate with this updated intent
      // in the updatedIntent property
      //this.emit(":delegate", updatedIntent); //uncomment this is using ASK SDK 1.0.9 or newer
	  
	  //this code is necessary if using ASK SDK versions prior to 1.0.9 
	  if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
			shouldEndSession: false
		});
		this.emit(':responseReady', updatedIntent);
		
    } else if (this.event.request.dialogState !== "COMPLETED") {
      console.log("in not completed");
      // return a Dialog.Delegate directive with no updatedIntent property.
      //this.emit(":delegate"); //uncomment this is using ASK SDK 1.0.9 or newer
	  
	  //this code necessary is using ASK SDK versions prior to 1.0.9
		if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', null, null),
			shouldEndSession: false
		});
		this.emit(':responseReady');
		
    } else {
      console.log("in completed");
      console.log("returning: "+ JSON.stringify(this.event.request.intent));
      // Dialog is now complete and all required slots should be filled,
      // so call your normal intent handler.
      return this.event.request.intent;
    }
}


function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    let i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}
function isSlotValid(request, slotName){
        let slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        let slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}

//These functions are here to allow dialog directives to work with SDK versions prior to 1.0.9
//will be removed once Lambda templates are updated with the latest SDK

function createSpeechObject(optionsParam) {
    if (optionsParam && optionsParam.type === 'SSML') {
        return {
            type: optionsParam.type,
            ssml: optionsParam['speech']
        };
    } else {
        return {
            type: optionsParam.type || 'PlainText',
            text: optionsParam['speech'] || optionsParam
        };
    }
}

function buildSpeechletResponse(options) {
    let alexaResponse = {
        shouldEndSession: options.shouldEndSession
    };

    if (options.output) {
        alexaResponse.outputSpeech = createSpeechObject(options.output);
    }

    if (options.reprompt) {
        alexaResponse.reprompt = {
            outputSpeech: createSpeechObject(options.reprompt)
        };
    }

    if (options.directives) {
        alexaResponse.directives = options.directives;
    }

    if (options.cardTitle && options.cardContent) {
        alexaResponse.card = {
            type: 'Simple',
            title: options.cardTitle,
            content: options.cardContent
        };

        if(options.cardImage && (options.cardImage.smallImageUrl || options.cardImage.largeImageUrl)) {
            alexaResponse.card.type = 'Standard';
            alexaResponse.card['image'] = {};

            delete alexaResponse.card.content;
            alexaResponse.card.text = options.cardContent;

            if(options.cardImage.smallImageUrl) {
                alexaResponse.card.image['smallImageUrl'] = options.cardImage.smallImageUrl;
            }

            if(options.cardImage.largeImageUrl) {
                alexaResponse.card.image['largeImageUrl'] = options.cardImage.largeImageUrl;
            }
        }
    } else if (options.cardType === 'LinkAccount') {
        alexaResponse.card = {
            type: 'LinkAccount'
        };
    } else if (options.cardType === 'AskForPermissionsConsent') {
        alexaResponse.card = {
            type: 'AskForPermissionsConsent',
            permissions: options.permissions
        };
    }

    let returnResult = {
        version: '1.0',
        response: alexaResponse
    };

    if (options.sessionAttributes) {
        returnResult.sessionAttributes = options.sessionAttributes;
    }
    return returnResult;
}

function getDialogDirectives(dialogType, updatedIntent, slotName) {
    let directive = {
        type: dialogType
    };

    if (dialogType === 'Dialog.ElicitSlot') {
        directive.slotToElicit = slotName;
    } else if (dialogType === 'Dialog.ConfirmSlot') {
        directive.slotToConfirm = slotName;
    }

    if (updatedIntent) {
        directive.updatedIntent = updatedIntent;
    }
    return [directive];
}