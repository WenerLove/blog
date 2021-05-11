(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{242:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(8),l=(a(0),a(988)),b={id:"packer",title:"Packer"},c={unversionedId:"ops/infra/packer",id:"ops/infra/packer",isDocsHomePage:!1,title:"Packer",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/ops/infra/packer.md",slug:"/ops/infra/packer",permalink:"/notes/ops/infra/packer",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/packer.md",version:"current",sidebar:"docs",previous:{title:"Nomad",permalink:"/notes/ops/infra/nomad"},next:{title:"cf-terraforming",permalink:"/notes/ops/infra/terraform-cf"}},i=[{value:"HCL2",id:"hcl2",children:[]},{value:"Template",id:"template",children:[{value:"\u6a21\u7248\u8bed\u6cd5",id:"\u6a21\u7248\u8bed\u6cd5",children:[]},{value:"\u6761\u4ef6\u53d8\u91cf",id:"\u6761\u4ef6\u53d8\u91cf",children:[]},{value:"HOME",id:"home",children:[]},{value:"communicator",id:"communicator",children:[]},{value:"docker",id:"docker",children:[]},{value:"qemu",id:"qemu",children:[]}]}],p={toc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u81ea\u52a8\u5316\u591a\u5e73\u53f0\u955c\u50cf\u6784\u5efa\u5de5\u5177"))),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"CD"),Object(l.b)("li",{parentName:"ul"},"Dev/Prod Parity"),Object(l.b)("li",{parentName:"ul"},"Appliance/Demo Creation"))),Object(l.b)("li",{parentName:"ul"},"\u6838\u5fc3\u6d41\u7a0b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u542f\u52a8 builder\uff0c\u63d0\u4f9b\u4e00\u81f4\u7684\u73af\u5883",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"vm\u3001docker"))),Object(l.b)("li",{parentName:"ul"},"\u6267\u884c provisioners - \u670d\u52a1\u5f00\u901a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6784\u5efa artifact"),Object(l.b)("li",{parentName:"ul"},"file provisioner \u4e0b\u8f7d artifact \u5230\u672c\u5730"))),Object(l.b)("li",{parentName:"ul"},"\u6267\u884c post-processor",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"artifice \u9a8c\u8bc1 \u4ea7\u51fa\u7269 \u5b58\u5728"),Object(l.b)("li",{parentName:"ul"},"\u4e0a\u4f20\u5230 docker hub\u3001oss \u7b49\u5176\u4ed6\u5730\u65b9"))))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Builder \u4e0d\u652f\u6301\u4f9d\u8d56"),Object(l.b)("li",{parentName:"ul"},"\u81ea\u52a8\u52a0\u8f7d",Object(l.b)("a",{parentName:"li",href:"https://www.packer.io/guides/hcl/variables"},"\u53d8\u91cf")," ",Object(l.b)("inlineCode",{parentName:"li"},"*.auto.pkrvars.hcl")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PACKER_LOG=1")," \u5f00\u542f\u65e5\u5fd7"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/geerlingguy/packer-boxes"},"geerlingguy/packer-boxes"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# macOS\nbrew install packer\n\npacker version\n# timestamp,target,type,data\npacker -machine-readable version\n\npacker -autocomplete-install\n\npacker build template.json\n\n# console\n# \u5b9e\u9a8c\u53d8\u91cf\u66ff\u6362\n# help exit variables\npacker console my_template.json\necho {{timestamp}} | packer console\n\n# hcl2 console - 1.6+\npacker console folder/\npacker console file.pkr.hcl\necho "1 + 5" | packer console --config-type=hcl2\npacker console --config-type=hcl2\n\npacker fix old.json > new.json\npacker inspect template.json\npacker validate my-template.json\n\n# \u4f7f\u7528 JQ \u5220\u9664\u8bc4\u8bba\njq \'walk(if type == "object" then del(._comment) else . end)\' commented_template.json > uncommented_template.json\n\n# \u624b\u52a8\u5b89\u88c5\n# https://packer.io/downloads.html\nver=$(curl -sfL https://api.github.com/repos/hashicorp/packer/releases/latest | jq .tag_name -r)\nver=${ver##v}\ncurl -LOC- https://releases.hashicorp.com/packer/${ver}/packer_${ver}_linux_amd64.zip\n')),Object(l.b)("h2",{id:"hcl2"},"HCL2"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"packer build folder"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"variables.pkr.hcl"),Object(l.b)("li",{parentName:"ul"},"locals.pkr.hcl"),Object(l.b)("li",{parentName:"ul"},"sources.pkr.hcl"),Object(l.b)("li",{parentName:"ul"},"build.pkr.hcl"))),Object(l.b)("li",{parentName:"ul"},"\u5f15\u53f7\u548c heredoc \u91cc\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"${")," ",Object(l.b)("inlineCode",{parentName:"li"},"%{")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/hashicorp/packer/issues/9176"},"#9176")," - HCL2: implementation list")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-hcl"},'# \u5168\u5c40\u5b9a\u4e49\u53ef\u590d\u7528\u7684 builder\nsource "docker" "base" {\n  image = "wener/base"\n  discard = true\n  pull = false\n}\n\n# \u672c\u5730\u53d8\u91cf\nlocals {\n    # \u76f4\u63a5\u5f15\u7528\n    wee = local.baz\n    # \u5b57\u7b26\u4e32\u4e2d\u66ff\u6362\n    baz = "Foo is \'${var.foo}\' but not \'${local.wee}\'"\n}\n\n# \u53d8\u91cf\u5b9a\u4e49\nvariable "foo" {\n    type = string\n    default = "the default value of the `foo` variable"\n    description = "description of the `foo` variable"\n}\n\n# \u6784\u5efa\nbuild {\n  name = "test-build"\n  # \u5f15\u7528\n  source "docker.base" {}\n  # \u591a\u4e2a\n  # source = [ "source.docker.first", "source.docker.second" ]\n\n  provisioner "shell" {\n    # \u6307\u5b9a source \u6267\u884c\n    only = ["source.docker.base"]\n    # \u7b49\u5f85\u6307\u5b9a\u65f6\u95f4\n    pause_before = "10s"\n    max_retries = 5\n    timeout = "5m"\n\n    inline = [ "echo Tesing" ]\n  }\n\n  post-processor "shell-local" {\n    inline = ["echo Down working"]\n  }\n\n  post-processor "checksum" {\n    checksum_types = [ "md5", "sha512" ]\n    keep_input_artifact = true\n    only = ["source.amazon-ebs.example"]\n  }\n}\n')),Object(l.b)("h2",{id:"template"},"Template"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.packer.io/docs/builders"},"builders"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"alicloud-ecs - \u963f\u91cc\u4e91 ECS \u8fd0\u884c"),Object(l.b)("li",{parentName:"ul"},"docker - Docker \u91cc\u8fd0\u884c"),Object(l.b)("li",{parentName:"ul"},"qemu - \u901a\u8fc7 QEMU \u8fd0\u884c"),Object(l.b)("li",{parentName:"ul"},"libvirt - \u901a\u8fc7 libvirt \u8fd0\u884c"),Object(l.b)("li",{parentName:"ul"},"tencentcloud-cvm - \u817e\u8baf\u4e91 CVM \u8fd0\u884c"),Object(l.b)("li",{parentName:"ul"},"file - \u57fa\u4e8e\u6587\u4ef6\u6784\u5efa artifact \u7136\u540e\u8fd0\u884c post-processors"),Object(l.b)("li",{parentName:"ul"},"null - \u8bbe\u7f6e SSH\uff0c\u8fd0\u884c provisioners"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.packer.io/docs/communicators"},"communicator")," - \u901a\u4fe1\u673a\u5236"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.packer.io/docs/post-processors"},"post-processors"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"alicloud-import"),Object(l.b)("li",{parentName:"ul"},"artifice - \u6307\u5b9a\u4ea7\u51fa\u7269\uff0c\u4e4b\u540e\u7684 post-processors \u80fd\u8bbf\u95ee\u5230"),Object(l.b)("li",{parentName:"ul"},"compress"),Object(l.b)("li",{parentName:"ul"},"checksum"),Object(l.b)("li",{parentName:"ul"},"docker-import"),Object(l.b)("li",{parentName:"ul"},"docker-push"),Object(l.b)("li",{parentName:"ul"},"docker-save"),Object(l.b)("li",{parentName:"ul"},"docker-tag"),Object(l.b)("li",{parentName:"ul"},"manifest"),Object(l.b)("li",{parentName:"ul"},"shell - \u672c\u5730\u6267\u884c"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.packer.io/docs/provisioners"},"provisioners"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ansible-local - \u672c\u5730\u6267\u884c"),Object(l.b)("li",{parentName:"ul"},"ansible - \u8fdc\u7a0b\u6267\u884c"),Object(l.b)("li",{parentName:"ul"},"breakpoint - \u7b49\u5f85\u7528\u6237\u786e\u8ba4"),Object(l.b)("li",{parentName:"ul"},"file - \u6587\u4ef6\u4e0a\u4f20"),Object(l.b)("li",{parentName:"ul"},"powershell"),Object(l.b)("li",{parentName:"ul"},"shell"),Object(l.b)("li",{parentName:"ul"},"shell-local"))),Object(l.b)("li",{parentName:"ul"},"variables",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"{{user 'aws_access_key'}}")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"{{env 'MY_SECRET'}}")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"{{ consul_key 'my_image/softs_versions/next' }}")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"{{ vault '/secret/data/hello' 'foo'}}")),Object(l.b)("li",{parentName:"ul"},"\u6570\u7ec4\u53d8\u91cf\u53ef\u4f7f\u7528\u9017\u53f7\u62fc\u63a5\u7684\u5b57\u7b26\u4e32"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-var=name=value")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-var-file=vars.json"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "_comment": "This is a comment",\n  // \u5fc5\u987b - \u5b9a\u4e49\u4e00\u4e2a\u6216\u591a\u4e2a builder\n  "builders": [{}],\n  "description": "",\n  // packer \u6700\u5c0f\u7248\u672c\n  "min_packer_version": "",\n  // \u540e\u5904\u7406\u6b65\u9aa4\n  "post-processors": [{}],\n  // \u5b89\u88c5\u914d\u7f6e\u548c\u5305\u7684\u6b65\u9aa4\n  "provisioners": [{}],\n  // \u9519\u8bef\u65f6\u6267\u884c\n  "error-cleanup-provisioner": {\n    "type": "shell-local",\n    "inline": ["echo \'rubber ducky\'> ducky.txt"]\n  },\n  // \u53d8\u91cf\u5b9a\u4e49\n  "variables": {\n    "my_secret": "{{env `MY_SECRET`}}",\n    "not_a_secret": "plaintext",\n    "foo": "bar"\n  },\n  // \u5b9a\u4e49\u654f\u611f\u53d8\u91cf\n  "sensitive-variables": ["my_secret", "foo"]\n}\n')),Object(l.b)("h3",{id:"\u6a21\u7248\u8bed\u6cd5"},"\u6a21\u7248\u8bed\u6cd5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.packer.io/docs/templates/engine"},"\u6a21\u677f\u8bed\u6cd5"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"{{ }}")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"{{timestamp}}")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"{{.Variable}}"))))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"func"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"build_name"),Object(l.b)("td",{parentName:"tr",align:null},"\u6784\u5efa\u540d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"build_type"),Object(l.b)("td",{parentName:"tr",align:null},"\u6784\u5efa\u7c7b\u578b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"clean_resource_name"),Object(l.b)("td",{parentName:"tr",align:null},"\u5e72\u51c0\u7684\u8d44\u6e90\u540d\u5b57\uff0c\u7a7a\u683c\u8f6c",Object(l.b)("inlineCode",{parentName:"td"},"-"),"\uff0c\u5c0f\u5199\uff0c\u622a\u53d6\u957f\u5ea6\uff08GCE 63\uff0cAzure 80\uff09")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"env"),Object(l.b)("td",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"build"),Object(l.b)("td",{parentName:"tr",align:null},"\u6784\u5efa\u65f6\u7684\u72b6\u6001\u548c\u8fde\u63a5\u4fe1\u606f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"isotime [FORMAT]")),Object(l.b)("td",{parentName:"tr",align:null},"\u65f6\u95f4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lower"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"packer_version"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pwd"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"replace"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"( old, new string, n int, s )"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"replace_all"),Object(l.b)("td",{parentName:"tr",align:null},"\u5168\u66ff\u6362")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"split"),Object(l.b)("td",{parentName:"tr",align:null},"\u5206\u5272\u5b57\u7b26\u4e32")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"template_dir"),Object(l.b)("td",{parentName:"tr",align:null},"\u6a21\u677f\u76ee\u5f55")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"timestamp"),Object(l.b)("td",{parentName:"tr",align:null},"UNIX \u65f6\u95f4\u6233\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a\u53d8\u91cf\u4f7f\u7528\uff0c\u5426\u5219\u4f1a\u53d8")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"uuid"),Object(l.b)("td",{parentName:"tr",align:null},"UUID")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"upper"),Object(l.b)("td",{parentName:"tr",align:null},"\u5927\u5199")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"user"),Object(l.b)("td",{parentName:"tr",align:null},"\u7528\u6237\u53d8\u91cf")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"build",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ID - \u6784\u5efa VM \u7684 ID - \u4f8b\u5982 EC2 \u7684 instance id"),Object(l.b)("li",{parentName:"ul"},"Host, Port, User, Password - \u8bbf\u95ee\u673a\u5668\u7684\u4fe1\u606f\uff0c\u7528\u4e8e Ansible \u6216 Inspec"),Object(l.b)("li",{parentName:"ul"},"ConnType - \u901a\u4fe1\u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"PackerRunUUID - \u6784\u5efa ID"),Object(l.b)("li",{parentName:"ul"},"PackerHTTPIP, PackerHTTPPort, PackerHTTPAddr - packer \u63d0\u4f9b\u7684 http \u6587\u4ef6\u670d\u52a1 - vm \u4e2d\u7684 http \u76ee\u5f55"),Object(l.b)("li",{parentName:"ul"},"SSHPublicKey, SSHPrivateKey - packer \u94fe\u63a5\u7684\u5bc6\u94a5")))),Object(l.b)("h3",{id:"\u6761\u4ef6\u53d8\u91cf"},"\u6761\u4ef6\u53d8\u91cf"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "shell-local",\n  "command": "if [ ! -z \\"{{user `do_nexpose_scan`}}\\" ]; then python -u trigger_nexpose_scan.py; fi"\n}\n')),Object(l.b)("h3",{id:"home"},"HOME"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "home": "{{env `HOME`}}"\n  },\n  "builders": [\n    {\n      "type": "google",\n      "account_file": "{{ user `home` }}/.secrets/gcp-{{ user `env` }}.json"\n    }\n  ]\n}\n')),Object(l.b)("h3",{id:"communicator"},"communicator"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.packer.io/docs/communicators"},"communicator")," - \u901a\u4fe1\u673a\u5236",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"none - \u4e0d\u8bbe\u7f6e\uff0c\u4e0d\u80fd\u4f7f\u7528 provisioners"),Object(l.b)("li",{parentName:"ul"},"ssh",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ssh_host"),Object(l.b)("li",{parentName:"ul"},"ssh_port"),Object(l.b)("li",{parentName:"ul"},"ssh_username"),Object(l.b)("li",{parentName:"ul"},"ssh_password"),Object(l.b)("li",{parentName:"ul"},"ssh_keypair_name"),Object(l.b)("li",{parentName:"ul"},"temporary_key_pair_name"),Object(l.b)("li",{parentName:"ul"},"ssh_clear_authorized_keys"),Object(l.b)("li",{parentName:"ul"},"ssh_private_key_file"),Object(l.b)("li",{parentName:"ul"},"ssh_pty"),Object(l.b)("li",{parentName:"ul"},"ssh_timeout"),Object(l.b)("li",{parentName:"ul"},"ssh_agent_auth"),Object(l.b)("li",{parentName:"ul"},"ssh_disable_agent_forwarding"),Object(l.b)("li",{parentName:"ul"},"ssh_handshake_attempts"),Object(l.b)("li",{parentName:"ul"},"ssh_bastion_host"),Object(l.b)("li",{parentName:"ul"},"ssh_bastion_port"),Object(l.b)("li",{parentName:"ul"},"ssh_bastion_agent_auth"),Object(l.b)("li",{parentName:"ul"},"ssh_bastion_username"),Object(l.b)("li",{parentName:"ul"},"ssh_bastion_password"),Object(l.b)("li",{parentName:"ul"},"ssh_bastion_interactive"),Object(l.b)("li",{parentName:"ul"},"ssh_bastion_private_key_file"),Object(l.b)("li",{parentName:"ul"},"ssh_file_transfer_method"),Object(l.b)("li",{parentName:"ul"},"ssh_proxy_host"),Object(l.b)("li",{parentName:"ul"},"ssh_proxy_port"),Object(l.b)("li",{parentName:"ul"},"ssh_proxy_username"),Object(l.b)("li",{parentName:"ul"},"ssh_proxy_password"),Object(l.b)("li",{parentName:"ul"},"ssh_keep_alive_interval"),Object(l.b)("li",{parentName:"ul"},"ssh_read_write_timeout"),Object(l.b)("li",{parentName:"ul"},"ssh_remote_tunnels"),Object(l.b)("li",{parentName:"ul"},"ssh_local_tunnels"),Object(l.b)("li",{parentName:"ul"},"ssh_public_key"),Object(l.b)("li",{parentName:"ul"},"ssh_private_key"))),Object(l.b)("li",{parentName:"ul"},"winrm",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"winrm_username"),Object(l.b)("li",{parentName:"ul"},"winrm_password"),Object(l.b)("li",{parentName:"ul"},"winrm_host"),Object(l.b)("li",{parentName:"ul"},"winrm_port"),Object(l.b)("li",{parentName:"ul"},"winrm_timeout"),Object(l.b)("li",{parentName:"ul"},"winrm_use_ssl"),Object(l.b)("li",{parentName:"ul"},"winrm_insecure"),Object(l.b)("li",{parentName:"ul"},"winrm_use_ntlm"))),Object(l.b)("li",{parentName:"ul"},"docker",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Docker Builder")))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "communicator": "ssh",\n  "ssh_username": "myuser",\n  "pause_before_connecting": "10m"\n}\n')),Object(l.b)("h3",{id:"docker"},"docker"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "builders": [\n    {\n      "type": "docker",\n      // \u57fa\u7840\u955c\u50cf\n      "image": "ubuntu",\n      // \u4e09\u9009\u4e00 commit, discard, export_path\n      // \u63d0\u4ea4\n      "commit": true,\n      // \u4e22\u5f03\n      "discard": true,\n      // \u5bfc\u51fa\u5230\u6587\u4ef6\n      "export_path": "image.tar"\n    }\n  ],\n  "post-processors": [\n    [\n      {\n        "type": "docker-import",\n        "repository": "hashicorp/packer",\n        "tag": "0.7"\n      },\n      "docker-push"\n    ]\n  ]\n}\n')),Object(l.b)("h3",{id:"qemu"},"qemu"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u542f\u52a8\u53c2\u6570")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ini"},"-cdrom /xxx/packer_cache/xxx.iso\n-name packer-alpine\n-vnc 127.0.0.1:92\n-boot once=d\n-netdev user,id=user.0,hostfwd=tcp::4287-:22\n-device virtio-net,netdev=user.0\n# \u6302\u8f7d\u4e3a /dev/vda\n-drive file=output-alpine/packer-alpine,if=virtio,cache=writeback,discard=ignore,format=qcow2\n-m 512M\n-machine type=pc,accel=hvf\n")))}o.isMDXComponent=!0},988:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=o(a),u=n,j=s["".concat(b,".").concat(u)]||s[u]||m[u]||l;return a?r.a.createElement(j,c(c({ref:t},p),{},{components:a})):r.a.createElement(j,c({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);