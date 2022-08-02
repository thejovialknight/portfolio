function loadPost(title) {
    document.querySelector('article').innerHTML = get_post(title);
}

function main() {
    const postButtons = document.querySelectorAll('li');

    for(let i = 0; i < postButtons.length; ++i) {
        let button = postButtons[i];
        button.addEventListener("click", () => { loadPost(button.dataset.fname); });
    };
}

function get_post(title) {
    switch(title) {
        case "first-post" :
            return "<h1>How I learned to stop swimming, and love the nuclear bomb</h1><p>Lorem ipsum dolor <e>sit amet</e>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h2>Moving On</h2><p>Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Pretium aenean pharetra magna ac placerat vestibulum lectus. Et leo duis ut diam quam nulla porttitor massa id. Ultricies integer quis auctor elit sed vulputate mi sit. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Vestibulum morbi blandit cursus risus at ultrices mi. Netus et malesuada fames ac turpis egestas. Tristique et egestas quis ipsum suspendisse ultrices gravida. Ac tincidunt vitae semper quis lectus nulla at. Molestie a iaculis at erat pellentesque adipiscing commodo. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet.</p><p>Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Elit eget gravida cum sociis. Etiam tempor orci eu lobortis. Dolor sit amet consectetur adipiscing elit duis. Lorem ipsum dolor sit amet consectetur. Integer malesuada nunc vel risus commodo viverra. Elementum tempus egestas sed sed risus pretium. Aliquam ut porttitor leo a diam sollicitudin. Ac turpis egestas integer eget aliquet nibh praesent tristique. Ullamcorper eget nulla facilisi etiam dignissim diam.</p>";
            break;
        case "second-post" :
            return "<h1>How I learned to step back on this whole bomb thing</h1><p>Sociis natoque penatibus et magnis dis. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Facilisis volutpat est velit egestas dui id ornare arcu odio. Et netus et malesuada fames ac. Viverra mauris in aliquam sem. Ultricies integer quis auctor elit. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Quis lectus nulla at volutpat diam. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Volutpat diam ut venenatis tellus in metus vulputate. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Nibh cras pulvinar mattis nunc sed blandit. Rutrum <e>quisque</e> non tellus orci ac auctor. Erat velit scelerisque in dictum non consectetur a erat. Etiam tempor orci eu lobortis elementum. Sit amet facilisis magna etiam. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Massa tincidunt dui ut ornare. Viverra nam libero justo laoreet sit amet. Risus feugiat in ante metus dictum at tempor.</p>";
            break;
        default : 
            return "";
    }

    return "";
}

main();
