import React, {useRef, useState} from 'react';


const TocConfigControl = ({ updateValue, value, FullscreenModal }) => {
    const [open, setOpen] = useState(false);
    const showRef = useRef(false);
    const titleRef = useRef('');

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                padding: '10px 0px',
                marginLeft: '20px',
                cursor: 'pointer'
            }}
            onClick={() => {
                setOpen(true);
            }}
        >
            <div
                style={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: '0.5fr 1fr',
                    columnGap: '10px',
                    rowGap: '5px',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}><b>Show</b></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>{value?.show ? "yes" : "no"}</div>
                <div style={{ display: 'flex', alignItems: 'center' }}><b>Title</b></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>{value?.title ? value.title : "-"}</div>
                <div style={{ display: 'flex', alignItems: 'center' }}><b>Anchor</b></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>{value?.anchor ? value.anchor : "-"}</div>
            </div>
            <FullscreenModal show={open} onClose={() => setOpen(false)}>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-end',
                        padding: '20px',
                        border: 'solid 1px #dbd9d7'
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: '0.5fr 1fr',
                            columnGap: '10px',
                            rowGap: '5px',
                            marginBottom: '10px'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>Show</div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <input ref={showRef} defaultChecked={value?.show} type="checkbox" name="show" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>Title</div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <input onFocus={() => console.log(1)} ref={titleRef} defaultValue={value?.title} type="text" name="title"
                                   style={{ border: 'solid 1px #dbd9d7', padding: '2px 5px' }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>Anchor</div>

                    </div>
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            marginTop: '20px'
                        }}
                    >
                        <button
                            onClick={() => {
                                updateValue({
                                    ...value,
                                    show: showRef.current.checked,
                                    title: titleRef.current.value,
                                    anchor: getAnchorValue(titleRef.current?.value)
                                });
                                setOpen(false);
                            }}
                            style={{ color: '#fff', background: '#000', padding: '6px 12px', textTransform: 'uppercase' }}>
                            Save
                        </button>
                    </div>
                </div>
            </FullscreenModal>
        </div>
    )
}

export const tocConfigProp = () => ({
    tocConfig: {
        type: 'custom',
        control: TocConfigControl,
        displayName: 'ToC Config'
    },
});

export default TocConfigControl;
