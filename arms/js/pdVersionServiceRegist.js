$(function () {
    setSideMenu();
});

// --- 사이드 메뉴 설정 --- //
function setSideMenu() {
    setTimeout(function(){
        $('#sidebar_menu_product').attr("class","accordion-toggle active");
        $('#sidebar_menu_product').attr("aria-expanded","true");
        $('#sidebar_menu_product').css({'color':'lightblue'});
        $('#sidebar_menu_product').css({'font-weight':'900'});

        $('#product-elements-collapse').attr("class","panel-collapse collapse in");
        $('#product-elements-collapse').attr("aria-expanded","true");

        $('#sidebar_menu_product_version_regist').addClass("active");
        $('#sidebar_menu_product_version_regist').css({'color':'lightblue'});
        $('#sidebar_menu_product_version_regist').css({'font-weight':'900'});
    },1000);
}

// --- jstree ( product ) 테이블 설정 --- //
$(function() {
    jsTreeProductBuild();
});

function jsTreeClick(selectedNodeID) {
    console.log(selectedNodeID);
}

function jsTreeProductBuild(){

    console.log("href: "+$(location).attr('href'));
    console.log("protocol: "+$(location).attr('protocol'));
    console.log("host: "+$(location).attr('host'));
    console.log("pathname: "+$(location).attr('pathname'));
    console.log("search: "+$(location).attr('search'));
    console.log("hostname: "+$(location).attr('hostname'));
    console.log("port: "+$(location).attr('port'));
    var isDevelopingToRoute = "/auth-user";

    $("#productTree").bind(
        "before.jstree",
        function(e, data) {
            $("#alog").append(data.func + "<br />");
            $("li:not([rel='drive']).jstree-open > a > .jstree-icon").css('background-image',
                'url(http://www.a-rms.net/313devgrp/reference/jquery-plugins/jstree-v.pre1.0/themes/toolbar_open.png)');
            $("li:not([rel='drive']).jstree-closed > a > .jstree-icon").css('background-image',
                'url(http://www.a-rms.net/313devgrp/reference/jquery-plugins/jstree-v.pre1.0/themes/ic_explorer.png)');
        }).jstree({
        // List of active plugins
        "plugins": ["themes", "json_data", "ui", "crrm", "cookies", "dnd", "search", "types", "hotkeys", "contextmenu", "checkbox"],
        "themes": { "theme": [ "lightblue4" ] },
        //contextmenu
        "contextmenu": {
            items: { // Could be a function that should return an object like this one
                "create": {
                    "separator_before": true,
                    "separator_after": true,
                    "label": "Create",
                    "action": false,
                    "submenu": {
                        "create_file": {
                            "seperator_before": false,
                            "seperator_after": false,
                            "label": "File",
                            action: function(obj) {
                                this.create(obj, "last", {
                                    "attr": {
                                        "rel": "default"
                                    }
                                });
                            }
                        },
                        "create_folder": {
                            "seperator_before": false,
                            "seperator_after": false,
                            "label": "Folder",
                            action: function(obj) {
                                this.create(obj, "last", {
                                    "attr": {
                                        "rel": "folder"
                                    }
                                });
                            }
                        }

                    }
                },
                "ccp": {
                    "separator_before": false,
                    "separator_after": true,
                    "label": "Edit",
                    "action": false,
                    "submenu": {
                        "cut": {
                            "seperator_before": false,
                            "seperator_after": false,
                            "label": "Cut",
                            action: function(obj) {
                                this.cut(obj, "last", {
                                    "attr": {
                                        "rel": "default"
                                    }
                                });
                            }
                        },
                        "paste": {
                            "seperator_before": false,
                            "seperator_after": false,
                            "label": "Paste",
                            action: function(obj) {
                                this.paste(obj, "last", {
                                    "attr": {
                                        "rel": "folder"
                                    }
                                });
                            }
                        },

                        "changeType": {
                            "seperator_before": false,
                            "seperator_after": false,
                            "label": "Change Type",
                            "submenu": {
                                "toFile": {
                                    "seperator_before": false,
                                    "seperator_after": false,
                                    "label": "toFile",
                                    action: function(obj) {
                                        this.set_type("default");
                                    }
                                },
                                "toFolder": {
                                    "seperator_before": false,
                                    "seperator_after": false,
                                    "label": "toFolder",
                                    action: function(obj) {
                                        this.set_type("folder");
                                    }
                                }
                            }
                        }

                    }
                }

            }
        },

        // I usually configure the plugin that handles the data first
        // This example uses JSON as it is most common
        "json_data": {
            // This tree is ajax enabled - as this is most common, and maybe a bit more complex
            // All the options are almost the same as jQuery's AJAX (read the docs)
            "ajax": {
                // the URL to fetch the data
                "url": isDevelopingToRoute + "/api/arms/pdService/getChildNode.do",
                // the `data` function is executed in the instance's scope
                // the parameter is the node being loaded
                // (may be -1, 0, or undefined when loading the root nodes)
                "data": function(n) {
                    // the result is fed to the AJAX request `data` option
                    console.log(n);
                    return {
                        "c_id": n.attr ? n.attr("id").replace("node_", "").replace("copy_", "") : 1
                    };
                },
                "success": function(n) {
                    jSuccess('Product(service) Data Load Complete');
                }
            }
        },
        // Configuring the search plugin
        "search": {
            // As this has been a common question - async search
            // Same as above - the `ajax` config option is actually jQuery's AJAX object
            "ajax": {
                "url": isDevelopingToRoute + "/api/arms/pdService/searchNode.do",
                // You get the search string as a parameter
                "data": function(str) {
                    return {
                        "searchString": str
                    };
                },
                "success": function(n) {
                    jSuccess('search data complete');
                }
            }
        },
        // Using types - most of the time this is an overkill
        // read the docs carefully to decide whether you need types
        "types": {
            // I set both options to -2, as I do not need depth and children count checking
            // Those two checks may slow jstree a lot, so use only when needed
            "max_depth": -2,
            "max_children": -2,
            // I want only `drive` nodes to be root nodes
            // This will prevent moving or creating any other type as a root node
            "valid_children": ["drive"],
            "types": {
                // The default type
                "default": {
                    // I want this type to have no children (so only leaf nodes)
                    // In my case - those are files
                    "valid_children": "none",
                    // If we specify an icon for the default type it WILL OVERRIDE the theme icons
                    "icon": {
                        "image": "../dist/js/jstree-v.pre1.0/themes/attibutes.png"
                    }
                },
                // The `folder` type
                "folder": {
                    // can have files and other folders inside of it, but NOT `drive` nodes
                    "valid_children": ["default", "folder"],
                    "icon": {
                        "image": "../dist/js/jstree-v.pre1.0/themes/ic_explorer.png"
                    }
                },
                // The `drive` nodes
                "drive": {
                    // can have files and folders inside, but NOT other `drive` nodes
                    "valid_children": ["default", "folder"],
                    "icon": {
                        "image": "../dist/js/jstree-v.pre1.0/themes/home.png"
                    },
                    // those prevent the functions with the same name to be used on `drive` nodes
                    // internally the `before` event is used
                    "start_drag": false,
                    "move_node": false,
                    "delete_node": false,
                    "remove": false
                }
            }
        },
        // UI & core - the nodes to initially select and open will be overwritten by the cookie plugin

        // the UI plugin - it handles selecting/deselecting/hovering nodes
        "ui": {
            // this makes the node with ID node_4 selected onload
            "initially_select": ["node_4"]
        },
        // the core plugin - not many options here
        "core": {
            // just open those two nodes up
            // as this is an AJAX enabled tree, both will be downloaded from the server
            "initially_open": ["node_2", "node_3"]
        }
    }).bind("create.jstree", function(e, data) {
        $.post(isDevelopingToRoute + "/api/arms/pdService/addNode.do", {
            "ref": data.rslt.parent.attr("id").replace("node_", "").replace("copy_", ""),
            "c_position": data.rslt.position,
            "c_title": data.rslt.name,
            "c_type": data.rslt.obj.attr("rel")
        }, function(r) {
            if (r.status) {
                $(data.rslt.obj).attr("id", "node_" + r.id);
                jNotify('Notification : <strong>Add Node</strong>, Complete !');
            } else {
                $.jstree.rollback(data.rlbk);
            }
            if (typeof Chat != "undefined"){
                Chat.sendMessage("노드를 추가했습니다. 추가된 노드의 아이디는 " + r.id , function(data) {
                    console.log(data);
                });
            }
            jsTreeBuild();
        });
    }).bind("remove.jstree", function(e, data) {
        data.rslt.obj.each(function() {
            $.ajax({
                async: false,
                type: 'POST',
                url: isDevelopingToRoute + "/api/arms/pdService/removeNode.do",
                data: {
                    "c_id": this.id.replace("node_", "").replace("copy_", "")
                },
                success: function(r) {
                    jNotify('Notification : <strong>Remove Node</strong>, Complete !');
                    if (typeof Chat != "undefined"){
                        Chat.sendMessage("노드를 삭제했습니다. 삭제된 노드의 아이디는 " + r.c_id , function(data) {
                            console.log(data);
                        });
                    }
                    jsTreeBuild();
                }
            });
        });
    }).bind("rename.jstree", function(e, data) {
        $.post(isDevelopingToRoute + "/api/arms/pdService/alterNode.do", {
            "c_id": data.rslt.obj.attr("id").replace("node_", "").replace("copy_", ""),
            "c_title": data.rslt.new_name,
            "c_type": data.rslt.obj.attr("rel")
        }, function(r) {
            if (!r.status) {
                $.jstree.rollback(data.rlbk);
            }
            jSuccess('Rename Node Complete');
            if (typeof Chat != "undefined"){
                Chat.sendMessage("노드를 변경했습니다. 변경된 노드의 아이디는 " + r.c_id , function(data) {
                    console.log(data);
                });
            }
            jsTreeBuild();
        });
    }).bind("set_type.jstree", function(e, data) {
        $.post(isDevelopingToRoute + "/api/arms/pdService/alterNodeType.do", {
            "c_id": data.rslt.obj.attr("id").replace("node_", "").replace("copy_", ""),
            "c_title": data.rslt.new_name,
            "c_type": data.rslt.obj.attr("rel")
        }, function(r) {
            jSuccess('Node Type Change');
            if (typeof Chat != "undefined"){
                Chat.sendMessage("노드를 변경했습니다. 변경된 노드의 아이디는 " + r.c_id , function(data) {
                    console.log(data);
                });
            }
            jsTreeBuild();
        });
    }).bind("move_node.jstree", function(e, data) {
        data.rslt.o.each(function(i) {
            $.ajax({
                async: false,
                type: 'POST',
                url: isDevelopingToRoute + "/api/arms/pdService/moveNode.do",
                data: {
                    "c_id": $(this).attr("id").replace("node_", "").replace("copy_", ""),
                    "ref": data.rslt.cr === -1 ? 1 : data.rslt.np.attr("id").replace("node_", "").replace("copy_", ""),
                    "c_position": data.rslt.cp + i,
                    "c_title": data.rslt.name,
                    "copy": data.rslt.cy ? 1 : 0,
                    "multiCounter": i
                },
                success: function(r) {
                    if (r.status) {
                        $.jstree.rollback(data.rlbk);
                    } else {
                        $(data.rslt.oc).attr("id", "node_" + r.id);
                        if (data.rslt.cy && $(data.rslt.oc).children("UL").length) {
                            data.inst.refresh(data.inst._get_parent(data.rslt.oc));
                        }
                    }
                    jNotify('Notification : <strong>Move Node</strong> Complete !');
                    if (typeof Chat != "undefined"){
                        Chat.sendMessage("노드가 이동되었습니다. 이동된 노드의 아이디는 " + r.c_id , function(data) {
                            console.log(data);
                        });
                    }
                    jsTreeBuild();
                }
            });
        });
    }).bind("select_node.jstree", function (event, data) {
        // `data.rslt.obj` is the jquery extended node that was clicked
        if ($.isFunction(jsTreeClick)) {
            console.log(data.rslt.obj);
            jsTreeClick(data.rslt.obj.attr("id"));
        }
    });

    $("#mmenu input, #mmenu button").click(function() {
        switch (this.id) {
            case "add_default":
            case "add_folder":
                $("#productTree").jstree("create", null, "last", {
                    "attr": {
                        "rel": this.id.toString().replace("add_", "")
                    }
                });
                break;
            case "search":
                $("#productTree").jstree("search", document.getElementById("text").value);
                break;
            case "text":
                break;
            default:
                $("#productTree").jstree(this.id);
                break;
        }
    });
}
