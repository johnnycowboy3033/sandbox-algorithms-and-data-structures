$(function() {

    let format = new HtmlFormat();
    let data = new DataComponent(['Head','Midpoint','Tail'],format);

    format.title("Title");
    format.section("Section");
    format.subsection("Sub Section");
    format.paragraph(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`);

    data.printPointers([3,7,9,12,15,23,45],[0, 3, 5]);

    format.manyNewLine(6);
   
    $("#logging").html(format.pageWrite);

});