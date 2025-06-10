# SD---Anul-4

This repository uses git submodules for each assignment. The submodule
configuration was missing, which made it difficult to clone the
repository with all its code. The `.gitmodules` file now specifies the
remote URLs for the submodules.

To clone this repository with all assignments, run:

```bash
git clone --recurse-submodules <repo-url>
```
