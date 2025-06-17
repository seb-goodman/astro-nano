---
title: "Python's uv Is Mismarketed: It's Not About Speed"
description: "Astral thinks uv's superpower is speed. It isn't."
date: "Dec 11 2024"
draft: false
---

I'm a big fan of the Python package manager [uv](https://github.com/astral-sh/uv). A _big_ fan. I'll shudder using the word, but it has unironically been a 'game-changer' for me.

My appreciation for uv is probably why I've been so confused lately by how few Python developers have even come across it. Of those who have at least heard of uv, few are tempted to try it. I see this at work, but it's also borne out in conversations over social media, were people still seem convinced that Python tooling sucks.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I hate python<br>I hate python3<br>I hate pip3<br>I hate pip<br>I hate venv<br><br>Why can&#39;t they just come up with a normal version and package manager for god&#39;s sake. This is ridiculous.</p>&mdash; Async (@0xAsync) <a href="https://twitter.com/0xAsync/status/1766962418171670661?ref_src=twsrc%5Etfw">March 10, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;ve never had a python experience which didn&#39;t start with fighting the package manager and dependencies for the first few hours</p>&mdash; AJ Stuyvenberg (@astuyve) <a href="https://twitter.com/astuyve/status/1821575077655146751?ref_src=twsrc%5Etfw">August 8, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

My pet theory for uv's somewhat leisurely rise to Python stardom is its one sentence tagline, which the Astral team use on uv's Github page and on its website.

> "An extremely fast Python package and project manager, written in Rust."

On the face of it, this seems perfectly descriptive. What is it failing to communicate? And why don't people care?

Yes, uv _is_ fast. _Really_ fast. When your CI/CD pipeline drops from 5 minutes to 30 seconds and when your Docker builds shrink, speed like this actually matters. And this does have a compounding effect when it's used day-to-day. But even then, speed isn't quite the main appeal of uv for me, and I suspect it's not the appeal of uv for most Python developers who use it, nor 'would-be' uv converts.

Yes, uv is also a "package and project manager". But so what? We've had plenty of terrible or package managers before. And while we're here, what does "project manager" even mean? We've never had Python software that does "project management" before.

Yes, uv is also made in Rust. But again, what is this supposed to add to the comms? While I'm sure this matters greatly to Rustaceans, Python users aren't going to get hung up on what language their developer tools are built with. They just want it to not be terrible.

## The Real Problem uv Solves

The fundamental problem uv solves - and where it should focus its messaging - is tool sprawl. Python workflows used to be a Frankenstein's monster of different tools, each with their own configuration files and their own ways of breaking. uv isn't just a package manager — it's a _complete_ Python toolchain replacement:

- **Package management**: Replaces pip, pip-tools, pipenv
- **Virtual environments**: Replaces venv, virtualenv, conda
- **Project scaffolding**: Replaces cookiecutter for simple cases
- **Script running**: Replaces manual activation/deactivation
- **Building**: Replaces build, setuptools directly
- **Publishing**: Replaces twine
- **Python versioning**: Replaces pyenv

This means no more remembering which tool does what, everything lives in pyproject.toml, and _every_ commonly used command starts with uv, with effortlessly memorable syntax.

When I onboard new developers now, I don't need to explain historical baggage. I don't need to walk them through installing 6 different tools and their various configuration files. I just say: "Install uv. Run 'uv sync'. Yep... LGTM."

uv is a unified tool that just _happens_ to be blazingly fast. That's why it's winning (gradually), and that's why I think the copywriting misses the mark. The future of Python tools is to only ever need one multi-tool.
