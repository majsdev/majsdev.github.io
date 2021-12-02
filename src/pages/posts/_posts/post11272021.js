const post = {
    title: 'Overview Of Building an Application',
    date: '11/27/2021',
    content: `
    <div>
    <h2>0. Foreword</h2>
    This post is intended to serve as an overview for new comers in app development.
    When I first started, I have little idea in what are all the relevant pieces in app development, and there is a myriad of terms that I wish I knew and their connections to the context.
    I will try to include as many relevant terms as possible. It's okay if you don't understand all of them,
    because it's my intention to expose you to new terms so you will have an easier time connecting the dots when you come across them down your learning path.
    </div>
    <hr>
    <div>
    There are a few main steps in building an application end to end, they are:
    1. Design
    2. Develop
    3. Deploy
    </div>

    <div>
    <h2>1. Design</h2>
    First thing first, to start any project, there's going to be a design phase. 
    In this very first step, we are putting ideas in concrete terms and actionable items.
    We will need to define the scope of work; namely, what do we want the vending machine to do (what are the *features*)?
    With this question in mind, we are coming up with use cases, for which we will make technical decisions such as programming lanauge, algorithm, architecture, and etc.
    </div>

    <div>
    <h2>2. Develop</h2>
    This is where the actual programming starts.
    By programming I meaning implementing application logic, and testing the application, 
    by means of writing and executing tests or testing the application interactively via CLI, UI, or other means depending on the nature of the application.
    As the project goes on, you will find yourself repeating the steps. 
    And a lot of the times, you may find yourself spending more time debugging the code you wrote than the time you spent in writing the code.

    If you are working in a formal environment, you may also need to go through code reviews after you submit a what's called a pull request (sometimes it is call a merge request).
    What exactly goes in the code review depends on your group.
    But as the name suggests, your code will be reviewed by other people, and you may or may not get comments, or approval, depending on your code.

    This develop, test, debug, and code review cycle is the bulk of the *development* part of building an application.
    As I hinted, it's a cycle; therefore, you will need to iterate through it enough times until it is ready to be deployed.
    Sometimes, you may need to go back to the design phase and revise the plan.

    Adding to the code writing portion of this section, *version control* is something that you will be working with inseparably. 
    What this is is that your code changes are versioned. When you make changes and commit them, they are versioned.
    Git is a version control tool.
    </div>

    <div>
    <h2>3. Deploy</h2>
    When your application matures to the point where it is ready to go live for users to use, you are going to deploy it (to production usually).
    This could mean that you are hosting your application on a server in your basement (your data center).
    Or you have cloud providers that you ship your code to.
    Whichever method you choose, you will need to set up some additional code/script to accomplish that.

    You will come across the term CI/CD (continuous integration/continous deployment) quite often.
    This is basically saying you are pushing your code to a shared upstream often.
    It involves building and testing the code you pushed, to ensure that the application is at a working state.
    If not, you will know that it fails to work with the other pieces of the application, and you will get to fix the issue before you deploy your feature.
    And CD is describing the ability to ship your working code in an uninterrupted fashion.
    This relies on the fact that the code is in a working state, hence CI, then CD.
    </div>
    `

}

export default post;
