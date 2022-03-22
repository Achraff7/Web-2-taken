WScript.StdOut.Write("Enter your name> ")
var name = WScript.StdIn.ReadLine()
WScript.StdOut.Write('Salam ^__^: ' + name)

var numArgs = WScript.arguments.length;
for (var i = 0; i < WScript.arguments.length; i++) {
  WScript.StdOut.Write('Hello ' + WScript.arguments(i) + '\n');
}