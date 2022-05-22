window.addEventListener('load', () => {
    if (!isLoggedIn()) {
        activateLogin();
        return;
    }

    disableLogin();
    greeting(fetchUserName());

    setClockInterval();

    drawTodoList();
    activateTodoList();
});

loginForm.addEventListener('submit', e => {
    e.preventDefault();    

    handleLogin();

    setClockInterval();

    drawTodoList();
    activateTodoList();
});