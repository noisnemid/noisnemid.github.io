============================================================
README to the REPOSITORY
============================================================

.. index:: GITHUB-PAGES REPO README

.. meta::
    :keywords lang=zh: README

:Date: 2020-05-26 17:53:41

This is the source repo for NPKMP NOISNEMID PERSONAL KNOWLEDGE MANAGEMENT PLAN  https://noisnemid.github.io .

According to a blog with title 'Yes You Can Use GitHub Pages with Python Sphinx'
(https://www.docslikecode.com/articles/github-pages-python-sphinx/), the key-modifications to the official github-pages scheme are:

If you are using \*nix operations like Linux or similar ones like MacOS, etc., do the following:

#.  edit 'Makefile'

    The key is to add an empty file '.nojekyll' in the html docs folder.

    .. code-block::

        github:
            @make clean
            @make html
            @rsync -aAHXv --delete ./build/html/ ./docs
            @touch ./docs/.nojekyll

    But if you are using a windows OS, editing the ``Makefile`` will get errors like:
    ``Builder name github not registered or available through entry point`` .
    So you need to edit ``make.bat`` instead:

    add the following codes under the line ``if "%1" == "" goto help``

    .. code-block::

        REM for windows...
        REM ref https://github.com/sphinx-doc/sphinx/issues/3382#issuecomment-485655004

        if "%1" == "github" (
            %SPHINXBUILD% -M clean %SOURCEDIR% %BUILDDIR% %SPHINXOPTS%
            %SPHINXBUILD% -M html %SOURCEDIR% %BUILDDIR% %SPHINXOPTS%
            rsync -a --delete ./build/html/ ./docs
            cd docs & cd .>.nojekyll
            echo.Generated files copied to ./docs
            goto end
        )

    Note that ``rsync`` should be installed and added to your environment variables.

    Note that trick ``cd .>.nojekyll`` to emulate linux's command ``touch``

    That codes has been modified to fit this repo. If you want to make your own changes you could refer to the links about that mentioned issue after REM line.

#.  build with the command ``make github``

#.  in github repo settings, change the github pages source to 'docs/' folder of the branch.


Why the publishing html files are NOT in /docs ?
============================================================
:From: https://stackoverflow.com/a/62018811/13396432

It's my answer:

    If you use a repository named '.github.io' or '.github.com', you could only use their pre-provided file structure, which means you can't select the source for the github-pages service.

    If you rename the repo to other name which not match the auto-serve pattern(.github.io| ...com), you will be able to choose the source.

    In case [2], you need to add an empty file named '.nojekyll' under /docs folder, and put all files including CNAME and index.html and asset files(images, css,etc.,) here.
