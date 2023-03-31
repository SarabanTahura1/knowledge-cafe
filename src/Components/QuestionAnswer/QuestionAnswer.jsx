import React from 'react';
import "./QuestionAnswe.css"

const QuestionAnswer = () => {
    return (
        <div>
              <div className="question-answer">
                <h1><u>Question Answer</u></h1>
<h2>1.Props vs state?
</h2>
<p>Props is short for properties and they are used to pass data between React components.React has another special built-in object called state, which allows components to create and manage their own data.
</p>
<h2>2.How does useState work?
</h2>
<p>useState() is a React hook. Hooks make possible to use state and mutability inside function components.</p>
<h2>3.Purpose of useEffect other than fetching data?</h2>
<p>useEffect is React hook, which use to handle side effects functions,and with useEffect, we can separate them into another Function.lIt is like a Functional programming concept, where we try to encapsulate side effects in other functions so that other Functions can stay pure unaffected.</p>
<h2>4.How Does React work?
</h2>
<p>React is an open-source, front-end JavaScript library,, React basically maintains a tree , This tree is able to do efficient diff computations on the nodes.</p>
      </div>

        </div>
    );
};

export default QuestionAnswer;