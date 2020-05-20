import React from 'react';

class About extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return(
    <div class="artist__about">
    <p>I am a DevOps engineer with industry experiences in automated configuration management, testing, application deployment, 
    optimizing mission-critical deployments in <span class="highlight-text">SAP Converted Cloud - AWS - Google Cloud</span>, leveraging configuration management, 
    CI/CD, and DevOps processes.</p>
    <p>
    In my free time, I like to explore myself with various of programming languages and frameworks.</p>
    <p>For the front-end, I usually work with <span class="highlight-text">Javascript</span>, either standalone or including popular frameworks 
    like <span class="highlight-text">ReactJS</span> and <span class="highlight-text">VueJS</span> . 
    I also make the web pretty by using CSS or Bootstrap.</p>
    <p>For the back-end, I work with <span class="highlight-text">Javascript (MERN Stack)</span>, playing around with <span class="highlight-text">Java, C#, Python, .NET framework, MVC framework,
    Flask, Django, Spring</span>.</p>
    <p>I also have some fun times create desktop application with <span class="highlight-text">Electron Javascript</span> or <span class="highlight-text">WPF C#</span>, 
    Android application with <span class="highlight-text">Java, Kotlin</span> or <span class="highlight-text">React Native.</span>
    </p>

    <p><b>Let make an interview so you can "ooh" and "aah" over my experiences</b></p>
    </div>);
    }
}

export default About;