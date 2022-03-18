set nocompatible
filetype plugin on
syntax on

set wrap
set ruler
set wildmenu
set number relativenumber
set spell

autocmd FileType html inoremap ;1 <h1></h1><Esc>F1T>i
autocmd FileType html inoremap ;2 <h2></h2><Esc>F2T>i
autocmd FileType html inoremap ;3 <h3></h3><Esc>F3T>i
autocmd FileType html inoremap ;4 <h4></h4><Esc>F4T>i
autocmd FileType html inoremap ;b <b></b><Esc>FbT>i
autocmd FileType html inoremap ;i <i></i><Esc>FiT>i
autocmd FileType html inoremap ;u <u></u><Esc>FuT>i<Enter><Esc>ko<Tab>
autocmd FileType html inoremap ;ul <ul></ul><Esc>FuT>i<Enter><Esc>ko<Tab>
autocmd FileType html inoremap ;l <li></li><Esc>FlT>i

autocmd FileType tex inoremap ;l \begin{itemize}
