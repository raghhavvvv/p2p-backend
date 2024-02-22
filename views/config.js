const turnConfig = {
    iceServers: [
        { urls: [ "stun:bn-turn1.xirsys.com" ]}, 
        { username: "KKOReh5r6nC_oFbydN8FFiapKN6QD6qLiA4CAhp_NV6yjOf5_t6kc9sgV3RTeEmXAAAAAGXXXEZyYWdoaGF2dnZ2",   
        credential: "f952f72e-d18f-11ee-abec-0242ac140004",
        urls: [
             "turn:bn-turn1.xirsys.com:80?transport=udp",
             "turn:bn-turn1.xirsys.com:3478?transport=udp",
             "turn:bn-turn1.xirsys.com:80?transport=tcp",
             "turn:bn-turn1.xirsys.com:3478?transport=tcp",
             "turns:bn-turn1.xirsys.com:443?transport=tcp",
             "turns:bn-turn1.xirsys.com:5349?transport=tcp"]
            }
        ]
};
  