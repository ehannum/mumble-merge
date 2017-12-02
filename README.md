# mumble-merge
No third party libraries or instalation required.

Mumble Merge uses inline text parsing. Put phrases you want to swap inside \[square brackets\] and all the options inside another set of \[square brackets\].

Example usage:

\> var str = "This is a \[\[semi-randomly\]\[procedurally\]\] generated string."
\> mumble(str);
\> "This is a semi-randomly generated string."
\> mumble(str);
\> "This is a procedurally generated string."
\> mumble(str);
\> "This is a procedurally generated string."
\> mumble(str);
\> "This is a semi-randomly generated string."


TODO:

 - make mumble recursive for nested options (DONE)
 - allow for passing functions
 - inline math parsing
 - incporporate some useful standard functions you can call inline (random number within a range, stuff like that)
 - error handling and logging for malformed input strings
