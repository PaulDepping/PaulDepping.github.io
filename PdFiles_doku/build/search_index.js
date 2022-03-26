var documenterSearchIndex = {"docs":
[{"location":"#PdFiles-Documentation","page":"PdFiles Documentation","title":"PdFiles Documentation","text":"","category":"section"},{"location":"","page":"PdFiles Documentation","title":"PdFiles Documentation","text":"","category":"page"},{"location":"#PdFiles","page":"PdFiles Documentation","title":"PdFiles","text":"","category":"section"},{"location":"","page":"PdFiles Documentation","title":"PdFiles Documentation","text":"Modules = [PdFiles]","category":"page"},{"location":"#PdFiles.PdFiles","page":"PdFiles Documentation","title":"PdFiles.PdFiles","text":"PdFiles\n\nImplementations of a better Filehandles. \n\nIncludes a Read-Only Filehandle,  a better Write-Only Filehandle  as well as Mmap-Filehandles allowing both Reading and writing (but not appending (yet)).\n\nMain Functions: pdopen and @om_str\n\n\n\n\n\n","category":"module"},{"location":"#PdFiles.PD_BUFSIZE","page":"PdFiles Documentation","title":"PdFiles.PD_BUFSIZE","text":"const PD_BUFSIZE = 16 * (1024) * (1024)\n\nDefault size of the read/write-buffer of PdReadFile and PdWriteFile.\n\n\n\n\n\n","category":"constant"},{"location":"#PdFiles.PdFile","page":"PdFiles Documentation","title":"PdFiles.PdFile","text":"abstract type PdFile <: IO end\n\nAbstract Type for my Filehandles, to overwrite some of Julias functions from io.jl that cause allocations.\n\n\n\n\n\n","category":"type"},{"location":"#PdFiles.PdOpenMode","page":"PdFiles Documentation","title":"PdFiles.PdOpenMode","text":"abstract type PdOpenMode end\n\nTypes Implemented by @om_str, used in pdopen\n\n\n\n\n\n","category":"type"},{"location":"#PdFiles.PdOpenMode-Tuple{AbstractString}","page":"PdFiles Documentation","title":"PdFiles.PdOpenMode","text":"PdOpenMode(pattern::AbstractString)\n\nConvert pattern into its corresponding subtype of PdOpenMode. \n\nRecommended Usage of this is with the @om_str macro at parse-time.\n\n\n\n\n\n","category":"method"},{"location":"#PdFiles.PdRawFile","page":"PdFiles Documentation","title":"PdFiles.PdRawFile","text":"struct PdRawFile <: PdFile \n    fd::Cint\nend\n\nRaw Filehandle with no Buffer, that calls the C-Functions for Reading, Writing etc.\n\nUsed in PdReadFile and PdWriteFile.\n\n\n\n\n\n","category":"type"},{"location":"#PdFiles.PdReadFile","page":"PdFiles Documentation","title":"PdFiles.PdReadFile","text":"PdReadFile\n\nBuffered Filehandle for more performant Reading.\n\nOpened via pdopen(filename, om\"r\").\n\n\n\n\n\n","category":"type"},{"location":"#PdFiles.PdWriteFile","page":"PdFiles Documentation","title":"PdFiles.PdWriteFile","text":"PdReadFile\n\nBuffered Filehandle for more performant Reading.\n\nOpened via pdopen(filename, om\"r\").\n\n\n\n\n\n","category":"type"},{"location":"#PdFiles.pdopen","page":"PdFiles Documentation","title":"PdFiles.pdopen","text":"pdopen(file::AbstractString, om\"r\"[, bufsize::Integer])\n\nOpen a File in Read-Only Mode.\n\nReturns a PdReadFile.\n\n\n\n\n\n","category":"function"},{"location":"#PdFiles.pdopen-2","page":"PdFiles Documentation","title":"PdFiles.pdopen","text":"pdopen(file::AbstractString, om\"w\"[, bufsize::Integer])\n\nOpen a File in Write-Only Mode.\n\nTruncates the File when opening it.\n\nReturns a PdWriteFile.\n\n\n\n\n\n","category":"function"},{"location":"#PdFiles.pdopen-Tuple{AbstractString, AbstractString, Vararg{Any}}","page":"PdFiles Documentation","title":"PdFiles.pdopen","text":"pdopen(file::AbstractString, openmode::AbstractString, args...)\n\nOpen a File.\n\nWhich type of Filehandle is returned depends on openmode.\n\n\n\n\n\n","category":"method"},{"location":"#PdFiles.pdopen-Tuple{AbstractString, PdFiles.MmapReadWrite, Integer}","page":"PdFiles Documentation","title":"PdFiles.pdopen","text":"pdopen(file::AbstractString, om\"mr+\", fs::Integer)\n\nOpen a file via Mmap in Read-Write Mode.\n\nThe file will be truncated to fs Byte before opening it via Mmap.\n\nAppending is currently not possible and will throw an EOFError.\n\n\n\n\n\n","category":"method"},{"location":"#PdFiles.pdopen-Tuple{AbstractString, PdFiles.MmapReadWrite}","page":"PdFiles Documentation","title":"PdFiles.pdopen","text":"pdopen(file::AbstractString, om\"mr+\")\n\nOpen a file via Mmap in Read-Write Mode.\n\nAppending is currently not possible and will throw an EOFError.\n\n\n\n\n\n","category":"method"},{"location":"#PdFiles.pdopen-Tuple{AbstractString, PdFiles.MmapRead}","page":"PdFiles Documentation","title":"PdFiles.pdopen","text":"pdopen(file::AbstractString, om\"mr\")\n\nOpen a file via Mmap in Read-Only Mode.\n\n\n\n\n\n","category":"method"},{"location":"#PdFiles.@om_str-Tuple{Any}","page":"PdFiles Documentation","title":"PdFiles.@om_str","text":"@om_str \"pattern\"\nom\"pattern\"\n\nConvert pattern into its corresponding subtype of PdOpenMode at parse-time.\n\n\n\n\n\n","category":"macro"},{"location":"#PdLibc","page":"PdFiles Documentation","title":"PdLibc","text":"","category":"section"},{"location":"","page":"PdFiles Documentation","title":"PdFiles Documentation","text":"Modules = [PdFiles.PdLibc]","category":"page"},{"location":"#PdFiles.PdLibc","page":"PdFiles Documentation","title":"PdFiles.PdLibc","text":"PdLibc\n\nInterface for all the C-Calls and Constants used.\n\nIf a C-Function returns an error-code, Base.systemerror is used to confirm the return code, so the User does not need to do any error-checking themselfs.\n\n\n\n\n\n","category":"module"}]
}
