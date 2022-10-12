set nocompatible
filetype plugin on
syntax on

set wrap
set ruler
set wildmenu
set spell

autocmd FileType html inoremap ;temp <!DOCTYPE html><Esc>o<html><Esc>o<Enter><head><Esc>o<Enter></head><Esc>o<Enter><body><Esc>o<Enter></body><Esc>o<Enter></html><Esc>gg
autocmd FileType html inoremap ;1 <h1></h1><Esc>F1T>i
autocmd FileType html inoremap ;2 <h2></h2><Esc>F2T>i
autocmd FileType html inoremap ;3 <h3></h3><Esc>F3T>i
autocmd FileType html inoremap ;4 <h4></h4><Esc>F4T>i
autocmd FileType html inoremap ;p <p></p><Esc>FpT>i
autocmd FileType html inoremap ;b <b></b><Esc>FbT>i
autocmd FileType html inoremap ;i <i></i><Esc>FiT>i
autocmd FileType html inoremap ;u <u></u><Esc>FuT>i<Enter><Esc>ko<Tab>
autocmd FileType html inoremap ;ul <ul></ul><Esc>FuT>i<Enter><Esc>ko<Tab>
autocmd FileType html inoremap ;l <li></li><Esc>FlT>i
autocmd FileType html inoremap ;di <div id="" class=""></div><Esc>FdT>i<Enter><Enter><Esc>ki<Tab>

autocmd FileType tex inoremap ;l \begin{itemize}<Esc>o\setlength\itemsep{0cm}<Esc>o<Esc>o\end{itemize}<Esc>ki<Tab>\item<Space>
