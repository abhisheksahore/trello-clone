function allLists() {
    const all_lists = document.createElement('div');
    all_lists.classList.add('list-card-container');
    all_lists.classList.add('dark-blurry-background');
    all_lists.innerHTML = `<div class="list-card all-lists-container">
                                <div class="all-lists-title-and-close">
                                    <div class="all-lists-title">Select list</div>
                                    <div class="all-lists-close">Close</div>
                                </div>
                                <div class="all-lists-wrapper">
                                    
                                </div>
                            </div>`
    document.body.append(all_lists);
}   

export default allLists;