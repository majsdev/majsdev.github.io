const post = {
  title: "Overview Of Building an Application",
  date: "11/27/2021",
  content: `
    <div>
    <h4>0. Foreword</h4>
    This post is intended to serve as an overview for newcomers in app development.
    When I first started, I have little idea in what are all the relevant pieces in app development, and there is a myriad of terms that I wish I knew and their connections to the context.
    I will try to include as many relevant terms as possible. It's okay if you don't understand all of them,
    because it's my intention to expose you to new terms so you will have an easier time connecting the dots when you come across them down your learning path.
    </div>

    <br>
    <hr>
    <br>

    <div>
    There are a few main steps in building an application end to end, they are:
    <ol>
    <li><a href="#design">Design</li>
    <li><a href="#develop">Develop</a></li>
    <li><a href="#deploy">Deploy</a></li>
    </ol>
    </div>

    <br>
    <hr>
    <br>

    <div>
    <h4 id="design">1. Design</h4>
    First thing first, to start any project, there's going to be a design phase. 
    In this very first step, we are putting ideas in concrete terms and actionable items.
    We will need to define the scope of work; namely, what the *features* are.
    Next, we are coming up with use cases (scenarios of how the user/actor interacts with the app, and how does the app respond), for which we will make technical decisions such as programming language, algorithm, architecture, etc.
    </div>

    <br>
    <hr>
    <br>

    <div>
    <h4 id="develop">2. Develop</h4>
    Once we have the spec, and technical design decisions, we can start programming.
    By programming, I mean implementing application logic, and testing the application
    (through writing and executing tests or testing the application interactively via CLI, UI, or other means depending on the nature of the application).
    As the project goes on, you will find yourself repeating the steps. 
    And a lot of the time, you may find yourself spending more time debugging the code you wrote than the time you spent in writing the code.

    <br>

    If you are working in a formal environment, you may also need to go through code reviews after you submit what's called a pull request (sometimes it is called a merge request).
    What exactly goes in the code review depends on your group.
    But as the name suggests, your code will be reviewed by other people, and you may or may not get comments, or approval, depending on your code.

    <br>

    This develop, test, debug, and code review cycle is the bulk of the *development* part of building an application.
    As I hinted, it's a cycle; therefore, you will need to iterate through it enough times until it is ready to be deployed.
    Sometimes, you may need to go back to the design phase and revise the plan.

    <br>

    Adding to the code writing portion of this section, *version control* is something that you will be working with inseparably. 
    What this is is that when you make code changes and commit them, they are versioned. (*Git is the most common version control tool.)
    </div>

    <br>
    <hr>
    <br>

    <div>
    <h4 id="deploy">3. Deploy</h4>
    When your application matures to the point where it is ready to go live for users to use, you are going to deploy it (to production usually).
    This could mean that you are hosting your application on a server in your basement (your data center).
    Or you have (cloud) providers that you ship your code to.
    Whichever method you choose, you will need to set up some additional code/script to accomplish that.

    <br>

    You will come across the term CI/CD (continuous integration/continuous deployment) quite often.
    This is saying you are pushing your code to a shared upstream often.
    It involves building and testing the code you pushed, to ensure that the application is in a working state.
    If not, you will know that it fails to work with the other pieces of the application, and you will get to fix the issue before you deploy your feature.
    And CD is describing the ability to ship your working code in an uninterrupted fashion.
    This relies on the fact that the code is in a working state, hence CI, then CD.
    </div>
    `,
};

export default post;
