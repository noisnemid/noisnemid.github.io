============================================================
README on the REPOSITORY
============================================================

.. index:: GITHUB-PAGES REPO README

.. meta::
    :keywords lang=zh: README

:Date: 2020-05-26 17:53:41
:From: Ceres


According to a blog with title 'Yes You Can Use GitHub Pages with Python Sphinx'
(https://www.docslikecode.com/articles/github-pages-python-sphinx/), the key-modification
to the official github-pages scheme are:

#.  adding a '.nojekyll' empty file
#.  add lines to 'Makefile'::

        github:
            @make html
            @cp -a build/html/. ./

Then the site could be build with the command::

    make github

Why the publishing html files are NOT in /docs ?
============================================================
:From: https://stackoverflow.com/a/62018811/13396432

It's my answer.

    If you use a repository named '.github.io' or '.github.com', you could only use their pre-provided file structure, which means you can't select the source for the github-pages service.

    If you rename the repo to other name which not match the auto-serve pattern(.github.io| ...com), you will be able to choose the source.

    In case [2], you need to add an empty file named '.nojekyll' under /docs folder, and put all files including CNAME and index.html and asset files(images, css,etc.,) here.
