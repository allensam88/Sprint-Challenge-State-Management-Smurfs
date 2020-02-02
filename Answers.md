1. What problem does the context API help solve?

Context can provide values to multiple components at different levels in order to avoid continuous prop drilling.  It works especially well for basic things like preferences and themes.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Action creators are functions that can be dispatched to the reducer and they send an action ‘type’ and an optional payload, if needed.  The reducer takes in that action type and switches to a specific case for handling that scenario.  It then changes the state in the store, typically based upon a new payload value.  All of this is happening synchronously, but if we want an asynchronous action to occur, like an API call, then it must begin in the action file first so that it can be handled by middleware before reaching the reducer/store.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global state that is housed in a store/reducer.  It saves data that we truly want to save and access for later.  Component state is used locally for temporary values that we don’t really need forever, but are necessary for conducting a local operation, such as holding on to a text input value and the user types onChange.  When the user hits enter or clicks a button onSubmit the values will then be transferred to the global state store for the entire App.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is a middleware tool that helps us perform asynchronous actions, like an API call.  Middleware will intercept an action first before it reaches the reducer, then perform some other operational detour.  In the async case, by having the API calls nested inside a function that returns another inner function, we can utilize the dispatcher function to play out 3 different phases of our finite state machine (loading/success/fail). 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

None so far, I find this stuff to be really confusing and I’m surprised that I’ve made it this far.