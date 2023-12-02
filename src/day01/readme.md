# 2023 Day 1

Either from learning my lesson from last year or just by coincidence, I didn't fall into the same trap as before and spending a bunch of time on building the template and builder. I was tempted, for sure, but until I do a couple of these challenges, I don't want to lock myself into any particular template. I want to see what feels right first.

### Thoughts / Stuff I've Learned:
* Bun is much more straightforward than Deno, especially in terms of dealing with the File System and imports
* Bun has good integration with VSCode, and I'm immediately able to throw in some breakpoints and see what's happening when my tests aren't passing.
* There were some edge cases that the examples didn't cover. I had to try a few things before I could nail it down.

### To Do Going Forward:
* Reintroduce the timing functions. I always liked seeing how long the functions take to run, especially in the later dates.
* Bring back the pretty printing output.
* Add script to download my input, but do it with Bun. The last couple of years, I've copied the same Bash script, but want to do everything TS this time around.
* Make a nice CLI to interface with the whole thing.